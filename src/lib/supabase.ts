import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Server-side Supabase client using the service role key.
 * Only use in API routes / server actions. Never expose to client.
 * Returns null if credentials are not configured.
 */
export const supabaseAdmin: SupabaseClient | null =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

/**
 * Type definitions matching the Supabase tables from the briefing.
 */
export interface CommunityInterest {
  email: string;
  name?: string;
  role?: string;
  interested_in?: string[];
  locale?: string;
  consent_given: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
  locale?: string;
}

export type Verbinding =
  | 'aya'
  | 'naaste'
  | 'zorgprofessional'
  | 'onderzoeker'
  | 'supporter'
  | 'anders';

export interface CongresAanmelding {
  naam: string;
  email: string;
  verbinding: Verbinding[];
  bijdrage?: string;
  aangemeld_via?: string;
  interesse_mia_rapport?: boolean;
}
