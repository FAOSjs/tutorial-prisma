import { CreateDeliveryBoyUseCase } from './CreateDeliveryBoyUseCase';
import { Request, Response } from "express";


export class CreateDeliveryBoyController {
   async handle(req: Request, res: Response){
      const {username, password} = req.body

      const createDeliveryBoyUseCase = new CreateDeliveryBoyUseCase()
      const result = await createDeliveryBoyUseCase.execute({
         username, 
         password
      })

      return res.status(201).json({
         result,
         message: "client was created!"
      })
   }
}