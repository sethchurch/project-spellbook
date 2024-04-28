import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';

import { useOptionalSession } from '@/features/auth';

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const session = useOptionalSession();
  const routeToLogin = () => navigate('/login');
  const routeToLogout = () => navigate('/logout');

  return (
    <Dropdown title="Profile Dropdown">
      <DropdownTrigger>
        {/* <Avatar isBordered radius="md" src="https://i.imgur.com/K2EZlrN.png" /> */}
        <Avatar isBordered radius="md" />
      </DropdownTrigger>
      <DropdownMenu aria-label="options dropdown">
        {session ? (
          <DropdownItem key="logout" color="danger" onClick={routeToLogout}>
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
