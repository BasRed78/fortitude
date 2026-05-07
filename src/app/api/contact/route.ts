import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, ContactSubmission } from '@/lib/supabase';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  locale: z.string().default('nl'),
  // Honeypot
  website: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data: ContactSubmission = {
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject,
      message: parsed.data.message,
      locale: parsed.data.locale,
    };

    if (!supabaseAdmin) {
      console.warn('Supabase not configured — skipping write');
      return NextResponse.json({ success: true });
    }

    // Store in Supabase
    const { error } = await supabaseAdmin
      .from('contact_submissions')
      .insert(data);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save' },
        { status: 500 }
      );
    }

    // TODO: Trigger email notification via Resend when API key is configured
    // const resendKey = process.env.RESEND_API_KEY;
    // if (resendKey) { ... }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
