/*
  Warnings:

  - You are about to drop the column `bioDetailId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `characterProficienciesId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `characterStatId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `deathSaveId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `hitDiceId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `hitPointsId` on the `Character` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[characterId]` on the table `BioDetail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `CharacterProficiencies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `CharacterStat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `DeathSave` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hp_characterId]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hd_characterId]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `characterId` to the `BioDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterId` to the `CharacterProficiencies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterId` to the `CharacterStat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterId` to the `DeathSave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hd_characterId` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp_characterId` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Made the column `characterId` on table `Resource` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Attack" DROP CONSTRAINT "Attack_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Attack" DROP CONSTRAINT "Attack_detailId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_bioDetailId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_characterProficienciesId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_characterStatId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_deathSaveId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_hitDiceId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_hitPointsId_fkey";

-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_attackId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_componentDetailId_fkey";

-- DropIndex
DROP INDEX "Character_bioDetailId_key";

-- DropIndex
DROP INDEX "Character_characterProficienciesId_key";

-- DropIndex
DROP INDEX "Character_characterStatId_key";

-- DropIndex
DROP INDEX "Character_deathSaveId_key";

-- DropIndex
DROP INDEX "Character_hitDiceId_key";

-- DropIndex
DROP INDEX "Character_hitPointsId_key";

-- AlterTable
ALTER TABLE "BioDetail" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "bioDetailId",
DROP COLUMN "characterProficienciesId",
DROP COLUMN "characterStatId",
DROP COLUMN "deathSaveId",
DROP COLUMN "hitDiceId",
DROP COLUMN "hitPointsId";

-- AlterTable
ALTER TABLE "CharacterProficiencies" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CharacterStat" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DeathSave" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "hd_characterId" TEXT NOT NULL,
ADD COLUMN     "hp_characterId" TEXT NOT NULL,
ALTER COLUMN "characterId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BioDetail_characterId_key" ON "BioDetail"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterProficiencies_characterId_key" ON "CharacterProficiencies"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterStat_characterId_key" ON "CharacterStat"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "DeathSave_characterId_key" ON "DeathSave"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_hp_characterId_key" ON "Resource"("hp_characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_hd_characterId_key" ON "Resource"("hd_characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_characterId_key" ON "Resource"("characterId");

-- AddForeignKey
ALTER TABLE "BioDetail" ADD CONSTRAINT "BioDetail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterProficiencies" ADD CONSTRAINT "CharacterProficiencies_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeathSave" ADD CONSTRAINT "DeathSave_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "Detail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_attackId_fkey" FOREIGN KEY ("attackId") REFERENCES "Attack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_componentDetailId_fkey" FOREIGN KEY ("componentDetailId") REFERENCES "ComponentDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_hp_characterId_fkey" FOREIGN KEY ("hp_characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_hd_characterId_fkey" FOREIGN KEY ("hd_characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterStat" ADD CONSTRAINT "CharacterStat_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
