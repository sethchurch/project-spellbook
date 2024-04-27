export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
  expiresIn: number;
  expiresAt: number;
}

export type { AuthSession as SupabaseAuthSession } from '@supabase/supabase-js';
