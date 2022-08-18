import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';
import { Request, Response } from "express";


export class CreateDeliveryController {
   async handle(req: Request, res: Response){
      const { item_name } = req.body
      const { client_id } = req
      const createDeliveryUseCase = await new CreateDeliveryUseCase().execute({
         id_client: client_id,
         item_name
      })

      return res.status(201).json({
         result: createDeliveryUseCase,
         message: "delivery was created!"
      })
   }
}