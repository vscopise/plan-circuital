-- CreateTable
CREATE TABLE "Datos_Circuitos" (
    "id" TEXT NOT NULL,
    "circuito" INTEGER NOT NULL,
    "serie" TEXT NOT NULL,
    "desde" INTEGER NOT NULL,
    "hasta" INTEGER NOT NULL,
    "direccion" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "accesible" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Datos_Circuitos_pkey" PRIMARY KEY ("id")
);
