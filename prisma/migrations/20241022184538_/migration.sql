/*
  Warnings:

  - Added the required column `cep` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Imovel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `Imovel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imovel` ADD COLUMN `cep` INTEGER NOT NULL,
    ADD COLUMN `lat` VARCHAR(191) NOT NULL,
    ADD COLUMN `long` VARCHAR(191) NOT NULL;
