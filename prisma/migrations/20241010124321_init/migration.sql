/*
  Warnings:

  - You are about to alter the column `quartos` on the `imovel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `imovel` MODIFY `quartos` INTEGER NOT NULL;
