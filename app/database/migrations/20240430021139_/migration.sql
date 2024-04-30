-- DropForeignKey
ALTER TABLE "CharacterStat" DROP CONSTRAINT "CharacterStat_characterId_fkey";

-- AddForeignKey
ALTER TABLE "CharacterStat" ADD CONSTRAINT "CharacterStat_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
