'use client';

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useThemeSwitch } from '@/hooks/useThemeSwitch';

const ProfileDropdown = () => {
  const router = useRouter();
  const { switchTheme } = useThemeSwitch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn((state) => !state);
  const handleLogin = () => router.push('/login');

  return (
    <Dropdown title="Profile Dropdown">
      <DropdownTrigger>
        <Avatar isBordered radius="md" src="https://i.pravatar.cc/300" />
      </DropdownTrigger>
      <DropdownMenu aria-label="options dropdown">
        <DropdownItem key="theme" onClick={switchTheme}>
          Toggle Theme
        </DropdownItem>
        {isLoggedIn ? (
          <DropdownItem key="logout" color="danger" onClick={toggleLogin}>
            Log Out
          </DropdownItem>
        ) : (
          <DropdownItem key="loxgin" color="primary" onClick={handleLogin}>
            Log In
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export { ProfileDropdown };