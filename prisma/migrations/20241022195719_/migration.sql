/*
  Warnings:

  - You are about to alter the column `lat` on the `imovel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `long` on the `imovel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `imovel` MODIFY `lat` DOUBLE NOT NULL,
    MODIFY `long` DOUBLE NOT NULL;
