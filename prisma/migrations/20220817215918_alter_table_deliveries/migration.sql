-- DropForeignKey
ALTER TABLE "delivery" DROP CONSTRAINT "delivery_id_deliveryboy_fkey";

-- AlterTable
ALTER TABLE "delivery" ALTER COLUMN "id_deliveryboy" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_id_deliveryboy_fkey" FOREIGN KEY ("id_deliveryboy") REFERENCES "deliveryboy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
