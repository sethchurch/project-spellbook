/*
  Warnings:

  - The values [Transumation] on the enum `SpellSchool` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `eyesColor` on the `BioDetail` table. All the data in the column will be lost.
  - You are about to drop the column `orginizations` on the `BioDetail` table. All the data in the column will be lost.
  - You are about to drop the `ComponentDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attacks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characterStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resources` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `spells` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SpellSchool_new" AS ENUM ('Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation');
ALTER TABLE "Spell" ALTER COLUMN "school" TYPE "SpellSchool_new" USING ("school"::text::"SpellSchool_new");
ALTER TYPE "SpellSchool" RENAME TO "SpellSchool_old";
ALTER TYPE "SpellSchool_new" RENAME TO "SpellSchool";
DROP TYPE "SpellSchool_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "BioDetail" DROP CONSTRAINT "BioDetail_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterProficiencies" DROP CONSTRAINT "CharacterProficiencies_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_characterId_fkey";

-- DropForeignKey
ALTER TABLE "DeathSave" DROP CONSTRAINT "DeathSave_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_characterId_fkey";

-- DropForeignKey
ALTER TABLE "attacks" DROP CONSTRAINT "attacks_characterId_fkey";

-- DropForeignKey
ALTER TABLE "characterStats" DROP CONSTRAINT "characterStats_characterId_fkey";

-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_userId_fkey";

-- DropForeignKey
ALTER TABLE "resources" DROP CONSTRAINT "resources_characterId_fkey";

-- DropForeignKey
ALTER TABLE "resources" DROP CONSTRAINT "resources_hd_characterId_fkey";

-- DropForeignKey
ALTER TABLE "resources" DROP CONSTRAINT "resources_hp_characterId_fkey";

-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_attackId_fkey";

-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_characterId_fkey";

-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_componentDetailId_fkey";

-- AlterTable
ALTER TABLE "BioDetail" DROP COLUMN "eyesColor",
DROP COLUMN "orginizations",
ADD COLUMN     "eyeColor" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "organizations" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "backstory" SET DEFAULT '',
ALTER COLUMN "personalityTraits" SET DEFAULT '',
ALTER COLUMN "ideals" SET DEFAULT '',
ALTER COLUMN "bonds" SET DEFAULT '',
ALTER COLUMN "flaws" SET DEFAULT '',
ALTER COLUMN "age" SET DEFAULT '',
ALTER COLUMN "height" SET DEFAULT '',
ALTER COLUMN "weight" SET DEFAULT '',
ALTER COLUMN "skinColor" SET DEFAULT '',
ALTER COLUMN "hairColor" SET DEFAULT '',
ALTER COLUMN "featuresTraits" SET DEFAULT '',
ALTER COLUMN "treasure" SET DEFAULT '';

-- AlterTable
ALTER TABLE "CharacterProficiencies" ALTER COLUMN "languages" SET DEFAULT '',
ALTER COLUMN "weapons" SET DEFAULT '',
ALTER COLUMN "armor" SET DEFAULT '',
ALTER COLUMN "other" SET DEFAULT '';

-- AlterTable
ALTER TABLE "DeathSave" ALTER COLUMN "sucesses" SET DEFAULT 0,
ALTER COLUMN "failures" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Detail" ALTER COLUMN "description" SET DEFAULT '';

-- DropTable
DROP TABLE "ComponentDetail";

-- DropTable
DROP TABLE "attacks";

-- DropTable
DROP TABLE "characterStats";

-- DropTable
DROP TABLE "characters";

-- DropTable
DROP TABLE "resources";

-- DropTable
DROP TABLE "spells";

-- DropEnum
DROP TYPE "CastingTime";

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterStat" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "con" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "wis" INTEGER NOT NULL,
    "cha" INTEGER NOT NULL,

    CONSTRAINT "CharacterStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bonus" INTEGER NOT NULL,
    "damage" TEXT NOT NULL,
    "damageType" "DamageType",
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Attack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "damage" TEXT,
    "damageType" "DamageType",
    "level" INTEGER NOT NULL,
    "range" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "castingTime" TEXT NOT NULL,
    "school" "SpellSchool" NOT NULL,
    "verbal" BOOLEAN NOT NULL DEFAULT false,
    "somatic" BOOLEAN NOT NULL DEFAULT false,
    "material" BOOLEAN NOT NULL DEFAULT false,
    "materialDescription" TEXT NOT NULL DEFAULT '',
    "isRitual" BOOLEAN NOT NULL DEFAULT false,
    "isConcentration" BOOLEAN NOT NULL DEFAULT false,
    "isAction" BOOLEAN NOT NULL DEFAULT false,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "source" TEXT,
    "current" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "temporary" INTEGER,
    "hp_characterId" TEXT,
    "characterId" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HitDie" (
    "id" TEXT NOT NULL,
    "current" TEXT NOT NULL,
    "max" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "HitDie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterStat_characterId_key" ON "CharacterStat"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_hp_characterId_key" ON "Resource"("hp_characterId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_characterId_key" ON "Resource"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "HitDie_characterId_key" ON "HitDie"("characterId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterStat" ADD CONSTRAINT "CharacterStat_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BioDetail" ADD CONSTRAINT "BioDetail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterProficiencies" ADD CONSTRAINT "CharacterProficiencies_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeathSave" ADD CONSTRAINT "DeathSave_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_hp_characterId_fkey" FOREIGN KEY ("hp_characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HitDie" ADD CONSTRAINT "HitDie_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
