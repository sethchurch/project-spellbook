'use client';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider, Link } from '@nextui-org/react';

import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useStore } from '@/hooks/useStore';

const CharacterList = () => {
  const characters = useStore(useCharacterStore, (state) => state.characters);

  return (
    <div className="flex-stack p-8">
      {!characters ? (
        <div>Loading...</div>
      ) : (
        Object.entries(characters).map(([id, character]) => {
          return (
            <Link key={id} href={`/character/${id}`}>
              <Card className="w-full" shadow="sm">
                <CardHeader title={character.name}>{`{ "name": ${character.name} }`}</CardHeader>
                <Divider />
                <CardBody>
                  <pre>{JSON.stringify(character.bio, null, 2)}</pre>
                </CardBody>
                <Divider />
                <CardFooter>
                  <pre>{JSON.stringify(character.proficiencies, null, 2)}</pre>
                </CardFooter>
              </Card>
            </Link>
          );
        })
      )}
    </div>
  );
};

export { CharacterList };
