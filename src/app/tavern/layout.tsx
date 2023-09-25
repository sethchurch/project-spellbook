'use client';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    // <AppShell
    //   header={{ height: 60 }}
    //   layout="alt"
    //   navbar={{ width: 300, breakpoint: 'sm', collapsed }}
    //   padding="md"
    //   withBorder={false}
    // >
    //   <NavHeader>
    //     <Grid w="100%">
    //       <Grid.Col span={4}>
    //         <Burger opened={sidenavOpened} size="sm" onClick={toggleSidenav} />
    //       </Grid.Col>
    //       <Grid.Col span={4}>
    //         <Input />
    //       </Grid.Col>
    //       <Grid.Col className="flex items-center" span={1}>
    //         <ColorSchemeToggle />
    //       </Grid.Col>
    //     </Grid>
    //   </NavHeader>

    //   <SideNav>
    //     <Input />
    //     <Button onClick={openModal}>
    //       <IconPlus stroke={3} />
    //     </Button>
    //     <CharacterNavSkeleton />
    //   </SideNav>

    //   <AppShell.Main>
    children
    //   </AppShell.Main>

    //   <BasicCreatorModal close={closeModal} opened={modalOpened} />
    // </AppShell>
  );
};

export default AppLayout;
