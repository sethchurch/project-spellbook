import type { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';

import { supabase } from '@/.server/supabase';

interface AuthInterface {
  authenticated: boolean;
  user: User | null;
  session: Session | null;
  setAuthentication: (auth: Session | null) => void;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthInterface>((set) => ({
  authenticated: false,
  user: null,
  session: null,
  setAuthentication: (auth) => set(() => ({ authenticated: !!auth, user: auth?.user, session: auth })),
  signOut: async () => {
    await supabase.auth.signOut();
    set(() => ({ authenticated: false, user: null, session: null }));
  },
}));
