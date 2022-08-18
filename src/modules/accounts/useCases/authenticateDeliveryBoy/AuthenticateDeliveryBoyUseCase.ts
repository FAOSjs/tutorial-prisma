import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"


interface IAuthenticateDeliveryBoy {
   username: string,
   password: string
}

export class AuthenticateDeliveryBoyUseCase {
   async execute({ username, password }: IAuthenticateDeliveryBoy) {
      const deliveryBoy = await prisma.deliveryBoy.findFirst({
         where: {
            username: {
               mode: "insensitive",
               equals: username
            }
         }
      })

      if(!deliveryBoy) throw new Error("username or password invalid!")

      const isPasswordCorrect = await compare(password, deliveryBoy.password)
      if(!isPasswordCorrect) throw new Error("username or password invalid!")

      const token = sign({username}, "AHbLu4b487989u7gcr5Nuiggsg34DSF",{
         subject: deliveryBoy.id,
         expiresIn: "3d"
      })

      return {token}
   }
}