'use client';

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { useThemeSwitch } from '@/hooks/useThemeSwitch';

const ProfileDropdown = () => {
  const router = useRouter();
  const { switchTheme } = useThemeSwitch();

  const isAuthenticated = useAuth((state) => state.authenticated);
  const signOut = useAuth((state) => state.signOut);
  const routeToLogin = () => router.push('/login');

  return (
    <Dropdown title="Profile Dropdown">
      <DropdownTrigger>
        <Avatar isBordered radius="md" src="https://i.pravatar.cc/300" />
      </DropdownTrigger>
      <DropdownMenu aria-label="options dropdown">
        <DropdownItem key="theme" onClick={switchTheme}>
          Toggle Theme
        </DropdownItem>
        {isAuthenticated ? (
          <DropdownItem key="logout" color="danger" onClick={signOut}>
            Log Out
          </DropdownItem>
        ) : (
          <DropdownItem key="login" color="primary" onClick={routeToLogin}>
            Log In
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export { ProfileDropdown };
