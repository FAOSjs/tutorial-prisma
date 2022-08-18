import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"


interface IAuthenticateClient {
   username: string,
   password: string
}

export class AuthenticateClientUseCase {
   async execute({ username, password }: IAuthenticateClient) {
      const client = await prisma.client.findFirst({
         where: {
            username: {
               mode: "insensitive",
               equals: username
            }
         }
      })

      if(!client) throw new Error("username or password invalid!")

      const isPasswordCorrect = await compare(password, client.password)
      if(!isPasswordCorrect) throw new Error("username or password invalid!")

      const token = sign({username}, "AHbLu4b487989Nuiggsg34DSF",{
         subject: client.id,
         expiresIn: "3d"
      })

      return {token}
   }
}