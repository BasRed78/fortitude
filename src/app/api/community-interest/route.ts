import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, CommunityInterest } from '@/lib/supabase';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  role: z.string().optional(),
  interested_in: z.array(z.string()).optional(),
  locale: z.string().default('nl'),
  consent_given: z.boolean().refine((v) => v === true, {
    message: 'Consent is required',
  }),
  // Honeypot field — must be empty
  website: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.website) {
      // Bot detected, return success silently
      return NextResponse.json({ success: true });
    }

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data: CommunityInterest = {
      email: parsed.data.email,
      name: parsed.data.name,
      role: parsed.data.role,
      interested_in: parsed.data.interested_in,
      locale: parsed.data.locale,
      consent_given: parsed.data.consent_given,
    };

    if (!supabaseAdmin) {
      console.warn('Supabase not configured — skipping write');
      return NextResponse.json({ success: true });
    }

    const { error } = await supabaseAdmin
      .from('community_interest')
      .insert({
        ...data,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown',
      });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
