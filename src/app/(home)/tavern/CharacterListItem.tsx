'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Button, Skeleton, Spacer, useDisclosure } from '@nextui-org/react';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useTavernState } from '@/hooks/useTavernState';

const CharacterListItemSkeleton = () => {
  return (
    <Card className="bg-pod-alt h-full w-full" shadow="md">
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
  );
};

interface CharacterListItemProps {
  character: Character;
  characterId: number;
}

const CharacterListItem = ({ character, characterId }: CharacterListItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isEditing = useTavernState((state) => state.isEditing);
  const removeCharacter = useCharacterStore((state) => state.removeCharacter.bind(null, characterId));
  const { backstory } = character;

  return (
    <>
      <Link
        className="h-full w-full rounded-xl shadow-sm transition-all hover:opacity-80 hover:shadow-xl"
        href={isEditing ? '#' : `/characters/${characterId}`}
      >
        <Card className="bg-pod-alt h-full w-full shadow-none">
          <CardHeader className="w-full px-3 py-4">
            <div className="grid w-full grid-cols-[1fr_max-content_1fr] items-center">
              <h2 className="col-start-2 text-center text-xl font-bold">{character.name}</h2>
              {isEditing && (
                <Button isIconOnly className="justify-self-end" color="danger" size="sm" onClick={onOpen}>
                  <IconX />
                </Button>
              )}
            </div>
          </CardHeader>
          <div className="relative h-56 w-full bg-gradient-to-r from-violet-700 to-violet-950">
            {/* <Image fill alt="image of character" sizes="100vw" src="https://picsum.photos/2048/1024" /> */}
          </div>
          <CardBody className="overflow-hidden text-ellipsis px-3 py-4">
            <div className="flex flex-wrap gap-2">
              {character.class?.split('/').map((classDetail) => (
                <Chip key={classDetail} radius="md">
                  {classDetail.trim()}
                </Chip>
              ))}
            </div>
            <Spacer y={3} />
            <p className="line-clamp-3">{backstory}</p>
          </CardBody>
        </Card>
      </Link>
      <DiscardModal
        confirmAction={removeCharacter}
        isOpen={isOpen}
        title={`Delete ${character.name}`}
        onClose={onClose}
      />
    </>
  );
};

export { CharacterListItem, CharacterListItemSkeleton };
