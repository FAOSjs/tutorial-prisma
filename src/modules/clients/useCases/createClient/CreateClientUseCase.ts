import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"

interface ICreateClient {
   username: string,
   password: string
}

export class CreateClientUseCase {
   async execute({ password, username }: ICreateClient) {
      const isClientExists = await prisma.client.findFirst({
         where: {
            username: {
               mode: "insensitive",
               equals: username,
            }
         }
      })

      if(isClientExists) throw new Error("Client already exists")

      const passwordHashed = await hash(password, 10)

      const client = await prisma.client.create({
         data: {
            username,
            password: passwordHashed
         }
      })

      return {client}
   }
}