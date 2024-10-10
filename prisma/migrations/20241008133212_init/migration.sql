-- CreateTable
CREATE TABLE `Imovel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bairro` VARCHAR(191) NOT NULL,
    `quartos` VARCHAR(191) NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem` VARCHAR(191) NOT NULL,
    `imovel_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_imovel_id_fkey` FOREIGN KEY (`imovel_id`) REFERENCES `Imovel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
