/*
  Warnings:

  - You are about to drop the column `lat` on the `imovel` table. All the data in the column will be lost.
  - You are about to drop the column `long` on the `imovel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `imovel` DROP COLUMN `lat`,
    DROP COLUMN `long`;
