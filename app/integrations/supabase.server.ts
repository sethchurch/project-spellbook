import { createClient } from '@supabase/supabase-js';

import { isBrowser } from '@/utils/misc';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABSASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE!;

function getSupabaseClient(supabaseKey: string, accessToken?: string) {
  const global = accessToken
    ? {
        global: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      }
    : {};

  return createClient(SUPABASE_URL, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    ...global,
  });
}

function getSupabaseAdmin() {
  if (isBrowser) {
    throw new Error('getSupabaseAdmin is not available in browser and should NOT be used in insecure environments');
  }

  return getSupabaseClient(SUPABASE_SERVICE_ROLE);
}

const supabaseClient = getSupabaseClient(SUPABSASE_ANON_KEY);

export { getSupabaseAdmin, supabaseClient };
