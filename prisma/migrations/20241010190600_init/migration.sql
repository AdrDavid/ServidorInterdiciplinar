-- DropForeignKey
ALTER TABLE `imagem` DROP FOREIGN KEY `Imagem_imovel_id_fkey`;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_imovel_id_fkey` FOREIGN KEY (`imovel_id`) REFERENCES `Imovel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
