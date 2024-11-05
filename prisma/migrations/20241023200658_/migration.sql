/*
  Warnings:

  - Added the required column `numeroCasa` to the `Imovel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imovel` ADD COLUMN `numeroCasa` INTEGER NOT NULL;
