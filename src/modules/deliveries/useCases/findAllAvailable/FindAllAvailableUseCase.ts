import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
   async execute(){
      const deliveriesWithoutEndDate = await prisma.delivery.findMany({
         where: {
            end_at: null,
            id_deliveryboy: null
         }
      })

      return deliveriesWithoutEndDate
   }
}