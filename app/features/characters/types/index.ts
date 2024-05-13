import type { BioDetail, Character } from '@prisma/client';

export type CharacterWithBackstory = Character & {
  bio: BioDetail;
};
