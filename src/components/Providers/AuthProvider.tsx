'use client';

import type { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

interface AuthProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children, session }: AuthProviderProps) => {
  const setAuthentication = useAuth((state) => state.setAuthentication);

  useEffect(() => {
    const setAuth = async () => {
      setAuthentication(session);
    };

    setAuth();

    return () => {
      setAuthentication(null);
    };
  }, [session, setAuthentication]);

  return children;
};

export { AuthProvider };
