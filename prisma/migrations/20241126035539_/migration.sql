-- CreateTable
CREATE TABLE "Imovel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quartos" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "numeroCasa" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "garagem" INTEGER NOT NULL,
    "banheiro" INTEGER NOT NULL,
    "area" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Imagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagem" TEXT NOT NULL,
    "imovel_id" INTEGER NOT NULL,
    CONSTRAINT "Imagem_imovel_id_fkey" FOREIGN KEY ("imovel_id") REFERENCES "Imovel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
