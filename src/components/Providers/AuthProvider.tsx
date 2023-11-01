'use client';

import { type PropsWithChildren, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const setAuthentication = useAuth((state) => state.setAuthentication);

  useEffect(() => {
    const setAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        //  TODO: Handle error
        return;
      }
      setAuthentication(data.session);
    };

    setAuth();

    return () => {
      setAuthentication(null);
    };
  }, [setAuthentication]);

  return children;
};

export { AuthProvider };
