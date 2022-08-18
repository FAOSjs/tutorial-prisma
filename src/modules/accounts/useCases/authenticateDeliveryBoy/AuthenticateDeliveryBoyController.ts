import { AuthenticateDeliveryBoyUseCase } from './AuthenticateDeliveryBoyUseCase';
import { Request, Response } from "express";

export class AuthenticateDeliveryBoyController {
   async handle(req: Request, res: Response){
      const { password, username } = req.body

      const authenticateDeliveryBoyUseCase = new AuthenticateDeliveryBoyUseCase()
      const result = await authenticateDeliveryBoyUseCase.execute({
         password,
         username
      })

      return res.status(200).json({
         result,
         message: "you're logged now"
      })
   }
}