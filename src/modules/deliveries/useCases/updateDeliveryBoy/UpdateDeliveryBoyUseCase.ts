import { prisma } from "../../../../database/prismaClient"

interface IUpdateDeliveryBoy {
   id_delivery: string,
   id_deliveryboy: string
}

export class UpdateDeliveryBoyUseCase {
   async execute({id_delivery, id_deliveryboy}: IUpdateDeliveryBoy) {
      const result = await prisma.delivery.update({
         where: {
            id: id_delivery,
         },
         data: {
            id_deliveryboy
         }
      })

      return result
   }
}