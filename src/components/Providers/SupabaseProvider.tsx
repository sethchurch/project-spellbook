import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { ReactElement } from 'react';
import React from 'react';

interface SupabaseProviderProps {
  children: ReactElement;
}

const SupabaseProvider = async ({ children }: SupabaseProviderProps) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const { session } = data || {};
  return React.cloneElement(children, { session });
};

export { SupabaseProvider };
