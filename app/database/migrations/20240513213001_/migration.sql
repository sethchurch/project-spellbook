-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('LawfulGood', 'NeutralGood', 'ChaoticGood', 'LawfulNeutral', 'TrueNeutral', 'ChaoticNeutral', 'LawfulEvil', 'NeutralEvil', 'ChaoticEvil');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('Acrobatics', 'AnimalHandling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'SleightOfHand', 'Stealth', 'Survival');

-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('Proficient', 'Expertise');

-- CreateEnum
CREATE TYPE "SpellSchool" AS ENUM ('Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation');

-- CreateEnum
CREATE TYPE "StatType" AS ENUM ('Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma');

-- CreateEnum
CREATE TYPE "DamageType" AS ENUM ('Piercing', 'Bludgeoning', 'Slashing', 'Cold', 'Fire', 'Lightning', 'Thunder', 'Poison', 'Acid', 'Necrotic', 'Force', 'Phychic');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "BioDetail" (
    "id" TEXT NOT NULL,
    "backstory" TEXT NOT NULL DEFAULT '',
    "personalityTraits" TEXT NOT NULL DEFAULT '',
    "ideals" TEXT NOT NULL DEFAULT '',
    "bonds" TEXT NOT NULL DEFAULT '',
    "flaws" TEXT NOT NULL DEFAULT '',
    "age" TEXT NOT NULL DEFAULT '',
    "height" TEXT NOT NULL DEFAULT '',
    "weight" TEXT NOT NULL DEFAULT '',
    "eyeColor" TEXT NOT NULL DEFAULT '',
    "skinColor" TEXT NOT NULL DEFAULT '',
    "hairColor" TEXT NOT NULL DEFAULT '',
    "organizations" TEXT NOT NULL DEFAULT '',
    "featuresTraits" TEXT NOT NULL DEFAULT '',
    "treasure" TEXT NOT NULL DEFAULT '',
    "characterId" TEXT NOT NULL,

    CONSTRAINT "BioDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterProficiencies" (
    "id" TEXT NOT NULL,
    "languages" TEXT NOT NULL DEFAULT '',
    "weapons" TEXT NOT NULL DEFAULT '',
    "armor" TEXT NOT NULL DEFAULT '',
    "other" TEXT NOT NULL DEFAULT '',
    "characterId" TEXT NOT NULL,

    CONSTRAINT "CharacterProficiencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeathSave" (
    "id" TEXT NOT NULL,
    "successes" INTEGER NOT NULL DEFAULT 0,
    "failures" INTEGER NOT NULL DEFAULT 0,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "DeathSave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "source" TEXT,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
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
    "materialDescription" TEXT,
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
    "characterId" TEXT NOT NULL,

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
CREATE TABLE "HitPoint" (
    "id" TEXT NOT NULL,
    "current" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "temporary" INTEGER,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "HitPoint_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterStat_characterId_key" ON "CharacterStat"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "BioDetail_characterId_key" ON "BioDetail"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterProficiencies_characterId_key" ON "CharacterProficiencies"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "DeathSave_characterId_key" ON "DeathSave"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "HitDie_characterId_key" ON "HitDie"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "HitPoint_characterId_key" ON "HitPoint"("characterId");

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
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HitDie" ADD CONSTRAINT "HitDie_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HitPoint" ADD CONSTRAINT "HitPoint_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
