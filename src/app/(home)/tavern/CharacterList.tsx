'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip, Link, Skeleton, Spacer } from '@nextui-org/react';

import { loremIpsum } from '@/config/dummyData';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useStore } from '@/hooks/useStore';

const CharacterList = () => {
  const characters = useStore(useCharacterStore, (state) => state.characters);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {!characters
        ? Array.from({ length: 16 }).map((_, i) => (
            <Card key={i} className="bg-pod-alt h-full w-full" shadow="md">
              <CardHeader className="px-3 py-4">
                <Skeleton className="m-auto w-1/2 p-4" />
              </CardHeader>
              <div className="h-56 w-full bg-gradient-to-r from-violet-700 to-violet-950" />
              <CardBody className="px-3 py-4">
                <Skeleton className="w-1/2 p-4" />
                <Spacer y={3} />
                <Skeleton className="w-full p-12" />
              </CardBody>
            </Card>
          ))
        : Object.entries(characters).map(([id, character]) => {
            return (
              <Link key={id} href={`/character/${id}`}>
                <Card className="bg-pod-alt h-full w-full" shadow="md">
                  <CardHeader className="w-full px-3 py-4">
                    <h2 className="w-full text-center text-xl font-bold">{character.name}</h2>
                  </CardHeader>
                  <div className="h-56 w-full  bg-gradient-to-r from-violet-700 to-violet-950" />
                  <CardBody className="overflow-hidden text-ellipsis px-3 py-4">
                    <div className="flex flex-wrap gap-2">
                      {character.class.split('/').map((classDetail) => (
                        <Chip key={classDetail} radius="md">
                          {classDetail.trim()}
                        </Chip>
                      ))}
                    </div>
                    <Spacer y={3} />
                    <p>{`${loremIpsum.repeat(10).slice(0, 200).trim()}...`}</p>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
    </div>
  );
};

export { CharacterList };
