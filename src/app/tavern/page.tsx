'use client';

import { Divider, Grid, GridCol, Paper, Space, Stack } from '@mantine/core';

import { CharacterSheetPod } from '@/components/CharacterSheetPod';

const Tavern = () => {
  return (
    <Paper withBorder p={16} shadow="xs">
      <Grid grow>
        <GridCol span={8}>
          <CharacterSheetPod>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis voluptate. Nemo culpa,
            aperiam quaerat maxime omnis tempore praesentium nihil consequatur modi quia hic reprehenderit magni
            dolorem! Tenetur, obcaecati nam.
          </CharacterSheetPod>
        </GridCol>
        <GridCol span={2}>
          <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
        </GridCol>
      </Grid>

      <Space h={16} />
      <Divider />
      <Space h={16} />

      <Grid grow>
        <GridCol span={3}>
          <CharacterSheetPod>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis voluptate. Nemo culpa,
            aperiam quaerat maxime omnis tempore praesentium nihil consequatur modi quia hic reprehenderit magni
            dolorem! Tenetur, obcaecati nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
            facilis voluptate. Nemo culpa, aperiam quaerat maxime omnis tempore praesentium nihil consequatur modi quia
            hic reprehenderit magni dolorem! Tenetur, obcaecati nam.
          </CharacterSheetPod>
        </GridCol>
        <GridCol span={6}>
          <Stack>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>
              LoremLorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis voluptate. Nemo culpa,
              aperiam quaerat maxime omnis., ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis
              voluptate. Nemo culpa, aperiam quaerat maxime omnis.
            </CharacterSheetPod>
          </Stack>
        </GridCol>
        <GridCol span={3}>
          <Stack>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
            <CharacterSheetPod>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CharacterSheetPod>
          </Stack>
        </GridCol>
      </Grid>
    </Paper>
  );
};

export default Tavern;
