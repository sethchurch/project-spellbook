import type { Prisma } from '@prisma/client';

import { db } from '@/database';

export const getPreviewCharactersByUserId = async (userId: string) => {
  return db.character.findMany({
    where: { userId },
    include: {
      bio: {
        select: {
          backstory: true,
        },
      },
    },
  });
};

type CharacterQueryOpts = Omit<Prisma.CharacterFindUniqueArgs, 'where'>;
export const getCharacter = async (userId: string, characterId: string, opts?: CharacterQueryOpts) => {
  return db.character.findUnique({
    where: { userId, id: characterId },
    ...opts,
  });
};
