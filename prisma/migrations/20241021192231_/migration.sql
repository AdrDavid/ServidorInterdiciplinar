/*
  Warnings:

  - Added the required column `nome` to the `Imovel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imovel` ADD COLUMN `nome` VARCHAR(191) NOT NULL;
