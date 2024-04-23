'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Button, Skeleton, Spacer, useDisclosure } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { IconX } from '@tabler/icons-react';

import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useTavernState } from '@/hooks/useTavernState';
import { cn } from '@/utils/cn';

const CharacterListItemSkeleton = () => {
  return (
    <Card className="bg-pod-alt size-full" shadow="md">
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

interface CharacterListItemDisplayProps {
  character: Character;
  titlebarContent?: React.ReactNode;
  className?: string;
}

const CharacterListItemDisplay = ({ className, character, titlebarContent }: CharacterListItemDisplayProps) => {
  const { backstory, name } = character;
  return (
    <Card className={cn('bg-pod-alt size-full shadow-none', className)}>
      <CardHeader className="w-full px-3 py-4">
        <div className="grid w-full grid-cols-[1fr_max-content_1fr] items-center">
          <h2 className="col-start-2 text-center text-xl font-bold">{name}</h2>
          {titlebarContent}
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

  return (
    <>
      <Link
        className="size-full rounded-xl shadow-sm transition-all hover:opacity-80 hover:shadow-xl"
        to={isEditing ? '#' : `/characters/${characterId}`}
      >
        <CharacterListItemDisplay
          character={character}
          titlebarContent={
            isEditing ? (
              <Button isIconOnly className="justify-self-end" color="danger" size="sm" onClick={onOpen}>
                <IconX />
              </Button>
            ) : null
          }
        />
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

export { CharacterListItem, CharacterListItemDisplay, CharacterListItemSkeleton };
