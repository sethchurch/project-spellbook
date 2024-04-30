/*
  Warnings:

  - You are about to drop the column `body` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Character` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[characterStatId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hitPointsId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hitDiceId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[deathSaveId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterProficienciesId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bioDetailId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `armorClass` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `background` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bioDetailId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterProficienciesId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterStatId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deathSaveId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hitDiceId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hitPointsId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initiative` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isInspired` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('LawfulGood', 'NeutralGood', 'ChaoticGood', 'LawfulNeutral', 'TrueNeutral', 'ChaoticNeutral', 'LawfulEvil', 'NeutralEvil', 'ChaoticEvil');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('Acrobatics', 'AnimalHandling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'SleightOfHand', 'Stealth', 'Survival');

-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('Proficient', 'Expertise');

-- CreateEnum
CREATE TYPE "CastingTime" AS ENUM ('Action', 'BonusAction', 'Reaction', 'FreeAction');

-- CreateEnum
CREATE TYPE "SpellSchool" AS ENUM ('Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transumation');

-- CreateEnum
CREATE TYPE "StatType" AS ENUM ('Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma');

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "body",
DROP COLUMN "createdAt",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "alignment" "Alignment" NOT NULL DEFAULT 'LawfulGood',
ADD COLUMN     "armorClass" INTEGER NOT NULL,
ADD COLUMN     "background" TEXT NOT NULL,
ADD COLUMN     "bioDetailId" TEXT NOT NULL,
ADD COLUMN     "castingStat" "StatType" NOT NULL DEFAULT 'Intelligence',
ADD COLUMN     "characterProficienciesId" TEXT NOT NULL,
ADD COLUMN     "characterStatId" TEXT NOT NULL,
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "deathSaveId" TEXT NOT NULL,
ADD COLUMN     "hitDiceId" TEXT NOT NULL,
ADD COLUMN     "hitPointsId" TEXT NOT NULL,
ADD COLUMN     "initiative" INTEGER NOT NULL,
ADD COLUMN     "isInspired" BOOLEAN NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "savingThrows" "Skill"[],
ADD COLUMN     "speed" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BioDetail" (
    "id" TEXT NOT NULL,
    "backstory" TEXT NOT NULL,
    "personalityTraits" TEXT NOT NULL,
    "ideals" TEXT NOT NULL,
    "bonds" TEXT NOT NULL,
    "flaws" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "eyesColor" TEXT NOT NULL,
    "skinColor" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "orginizations" TEXT NOT NULL,
    "featuresTraits" TEXT NOT NULL,
    "treasure" TEXT NOT NULL,

    CONSTRAINT "BioDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterProficiencies" (
    "id" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "weapons" TEXT NOT NULL,
    "armor" TEXT NOT NULL,
    "other" TEXT NOT NULL,

    CONSTRAINT "CharacterProficiencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeathSave" (
    "id" TEXT NOT NULL,
    "sucesses" INTEGER NOT NULL,
    "failures" INTEGER NOT NULL,

    CONSTRAINT "DeathSave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "characterId" TEXT,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attack" (
    "id" TEXT NOT NULL,
    "detailId" TEXT NOT NULL,
    "characterId" TEXT,

    CONSTRAINT "Attack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "attackId" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "range" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "castingTime" "CastingTime" NOT NULL,
    "school" "SpellSchool" NOT NULL,
    "componentDetailId" TEXT NOT NULL,
    "isRitual" BOOLEAN NOT NULL,
    "isConcentration" BOOLEAN NOT NULL,
    "isAction" BOOLEAN NOT NULL,
    "characterId" TEXT,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "current" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "temporary" INTEGER,
    "name" TEXT,
    "source" TEXT,
    "characterId" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentDetail" (
    "id" TEXT NOT NULL,
    "verbal" BOOLEAN NOT NULL,
    "somatic" BOOLEAN NOT NULL,
    "material" BOOLEAN NOT NULL,
    "materialDescription" TEXT NOT NULL,

    CONSTRAINT "ComponentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSkill" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "skill" "Skill" NOT NULL,
    "type" "SkillType" NOT NULL,

    CONSTRAINT "CharacterSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterStat" (
    "id" TEXT NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "con" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "wis" INTEGER NOT NULL,
    "cha" INTEGER NOT NULL,

    CONSTRAINT "CharacterStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attack_detailId_key" ON "Attack"("detailId");

-- CreateIndex
CREATE UNIQUE INDEX "Spell_attackId_key" ON "Spell"("attackId");

-- CreateIndex
CREATE UNIQUE INDEX "Spell_componentDetailId_key" ON "Spell"("componentDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_characterStatId_key" ON "Character"("characterStatId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_hitPointsId_key" ON "Character"("hitPointsId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_hitDiceId_key" ON "Character"("hitDiceId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_deathSaveId_key" ON "Character"("deathSaveId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_characterProficienciesId_key" ON "Character"("characterProficienciesId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_bioDetailId_key" ON "Character"("bioDetailId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_characterStatId_fkey" FOREIGN KEY ("characterStatId") REFERENCES "CharacterStat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_hitPointsId_fkey" FOREIGN KEY ("hitPointsId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_hitDiceId_fkey" FOREIGN KEY ("hitDiceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_deathSaveId_fkey" FOREIGN KEY ("deathSaveId") REFERENCES "DeathSave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_characterProficienciesId_fkey" FOREIGN KEY ("characterProficienciesId") REFERENCES "CharacterProficiencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_bioDetailId_fkey" FOREIGN KEY ("bioDetailId") REFERENCES "BioDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "Detail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_attackId_fkey" FOREIGN KEY ("attackId") REFERENCES "Attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_componentDetailId_fkey" FOREIGN KEY ("componentDetailId") REFERENCES "ComponentDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
