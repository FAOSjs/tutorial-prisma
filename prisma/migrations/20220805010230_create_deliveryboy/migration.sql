-- CreateTable
CREATE TABLE "DeliveryBoy" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "DeliveryBoy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryBoy_username_key" ON "DeliveryBoy"("username");
