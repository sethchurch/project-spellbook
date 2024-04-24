'use client';

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';

// import { useAuth } from '@/hooks/useAuth';

const ProfileDropdown = () => {
  const navigate = useNavigate();

  // todo fix remix
  // const isAuthenticated = useAuth((state) => state.authenticated);
  // const signOut = useAuth((state) => state.signOut);
  const isAuthenticated = false;
  const routeToLogin = () => navigate('/login');

  return (
    <Dropdown title="Profile Dropdown">
      <DropdownTrigger>
        {/* <Avatar isBordered radius="md" src="https://i.imgur.com/K2EZlrN.png" /> */}
        <Avatar isBordered radius="md" />
      </DropdownTrigger>
      <DropdownMenu aria-label="options dropdown">
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
