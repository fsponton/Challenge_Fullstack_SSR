-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'PLAYER', 'CONSULTANT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayersMatch" (
    "id_player" INTEGER NOT NULL,
    "id_match" INTEGER NOT NULL,

    CONSTRAINT "PlayersMatch_pkey" PRIMARY KEY ("id_match","id_player")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "id_win" INTEGER NOT NULL,
    "id_loss" INTEGER NOT NULL,
    "countEnvidos" INTEGER NOT NULL,
    "countWinEnvidos" INTEGER NOT NULL,
    "countFlowers" INTEGER NOT NULL,
    "countWinFlowers" INTEGER NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Matches_id_key" ON "Matches"("id");

-- AddForeignKey
ALTER TABLE "PlayersMatch" ADD CONSTRAINT "PlayersMatch_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayersMatch" ADD CONSTRAINT "PlayersMatch_id_match_fkey" FOREIGN KEY ("id_match") REFERENCES "Matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
