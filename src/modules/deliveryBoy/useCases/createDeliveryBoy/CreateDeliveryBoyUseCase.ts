import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"

interface ICreateDeliveryBoy {
   username: string,
   password: string
}

export class CreateDeliveryBoyUseCase {
   async execute({ password, username }: ICreateDeliveryBoy) {
      const isDeliveryBoyExists = await prisma.deliveryBoy.findFirst({
         where: {
            username: {
               mode: "insensitive",
               equals: username,
            }
         }
      })

      if(isDeliveryBoyExists) throw new Error("delivery boy already exists")

      const passwordHashed = await hash(password, 10)

      const deliveryBoy = await prisma.deliveryBoy.create({
         data: {
            username,
            password: passwordHashed
         }
      })

      return {deliveryBoy}
   }
}