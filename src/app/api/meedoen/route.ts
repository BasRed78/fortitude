import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin, CongresAanmelding } from '@/lib/supabase';

const verbindingValues = [
  'aya',
  'naaste',
  'zorgprofessional',
  'onderzoeker',
  'supporter',
  'anders',
] as const;

const schema = z.object({
  naam: z.string().min(1).max(120),
  email: z.string().email().max(180),
  verbinding: z.array(z.enum(verbindingValues)).min(1).max(verbindingValues.length),
  bijdrage: z.string().max(2000).optional(),
  aangemeld_via: z.string().max(60).optional(),
  consent_given: z.boolean().refine((v) => v === true),
  website: z.string().max(0).optional(),
});

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return false;
}

function getIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body?.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const ip = getIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Te veel aanmeldingen vanaf dit adres. Probeer het later opnieuw.' },
        { status: 429 }
      );
    }

    const data: CongresAanmelding = {
      naam: parsed.data.naam,
      email: parsed.data.email,
      verbinding: [...parsed.data.verbinding],
      bijdrage: parsed.data.bijdrage,
      aangemeld_via: parsed.data.aangemeld_via || 'space4aya_2026',
    };

    if (!supabaseAdmin) {
      console.warn('Supabase not configured — skipping write');
      return NextResponse.json({ success: true });
    }

    const { error } = await supabaseAdmin.from('congres_aanmeldingen').insert({
      ...data,
      ip_adres: ip,
      user_agent: request.headers.get('user-agent') ?? 'unknown',
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('meedoen route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
