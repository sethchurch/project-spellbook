/*
  Warnings:

  - You are about to drop the `Attack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Character` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CharacterStat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spell` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `characterId` on table `Detail` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "DamageType" AS ENUM ('Piercing', 'Bludgeoning', 'Slashing', 'Cold', 'Fire', 'Lightning', 'Thunder', 'Poison', 'Acid', 'Necrotic', 'Force', 'Phychic');

-- DropForeignKey
ALTER TABLE "Attack" DROP CONSTRAINT "Attack_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Attack" DROP CONSTRAINT "Attack_detailId_fkey";

-- DropForeignKey
ALTER TABLE "BioDetail" DROP CONSTRAINT "BioDetail_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_userId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterProficiencies" DROP CONSTRAINT "CharacterProficiencies_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterStat" DROP CONSTRAINT "CharacterStat_characterId_fkey";

-- DropForeignKey
ALTER TABLE "DeathSave" DROP CONSTRAINT "DeathSave_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_hd_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_hp_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_attackId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_componentDetailId_fkey";

-- AlterTable
ALTER TABLE "Detail" ALTER COLUMN "source" DROP NOT NULL,
ALTER COLUMN "characterId" SET NOT NULL;

-- DropTable
DROP TABLE "Attack";

-- DropTable
DROP TABLE "Character";

-- DropTable
DROP TABLE "CharacterStat";

-- DropTable
DROP TABLE "Resource";

-- DropTable
DROP TABLE "Spell";

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "alignment" "Alignment" NOT NULL DEFAULT 'LawfulGood',
    "savingThrows" "StatType"[],
    "armorClass" INTEGER NOT NULL,
    "speed" TEXT NOT NULL,
    "initiative" INTEGER NOT NULL,
    "isInspired" BOOLEAN NOT NULL,
    "castingStat" "StatType" NOT NULL DEFAULT 'Intelligence',
    "notes" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characterStats" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "con" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "wis" INTEGER NOT NULL,
    "cha" INTEGER NOT NULL,

    CONSTRAINT "characterStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attacks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bonus" INTEGER NOT NULL,
    "damage" TEXT NOT NULL,
    "damageType" "DamageType" NOT NULL DEFAULT 'Bludgeoning',
    "characterId" TEXT NOT NULL,

    CONSTRAINT "attacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spells" (
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
    "characterId" TEXT NOT NULL,

    CONSTRAINT "spells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "source" TEXT,
    "current" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "temporary" INTEGER,
    "hp_characterId" TEXT,
    "hd_characterId" TEXT,
    "characterId" TEXT,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "characterStats_characterId_key" ON "characterStats"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "spells_attackId_key" ON "spells"("attackId");

-- CreateIndex
CREATE UNIQUE INDEX "spells_componentDetailId_key" ON "spells"("componentDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "resources_hp_characterId_key" ON "resources"("hp_characterId");

-- CreateIndex
CREATE UNIQUE INDEX "resources_hd_characterId_key" ON "resources"("hd_characterId");

-- CreateIndex
CREATE UNIQUE INDEX "resources_characterId_key" ON "resources"("characterId");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characterStats" ADD CONSTRAINT "characterStats_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BioDetail" ADD CONSTRAINT "BioDetail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterProficiencies" ADD CONSTRAINT "CharacterProficiencies_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeathSave" ADD CONSTRAINT "DeathSave_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attacks" ADD CONSTRAINT "attacks_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_attackId_fkey" FOREIGN KEY ("attackId") REFERENCES "attacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_componentDetailId_fkey" FOREIGN KEY ("componentDetailId") REFERENCES "ComponentDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_hp_characterId_fkey" FOREIGN KEY ("hp_characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_hd_characterId_fkey" FOREIGN KEY ("hd_characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
