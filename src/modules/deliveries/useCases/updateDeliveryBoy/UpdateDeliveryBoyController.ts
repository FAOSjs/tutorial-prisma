import { UpdateDeliveryBoyUseCase } from './UpdateDeliveryBoyUseCase';
import { Request, Response } from "express";


export class UpdateDeliveryBoyController {
   async handle(req: Request, res: Response) {
      const { id_deliveryboy } = req
      const { id } = req.params

      const updateDeliveryBoyUseCase = new UpdateDeliveryBoyUseCase()
      const result = await updateDeliveryBoyUseCase.execute({id_deliveryboy, id_delivery: id})

      return res.status(200).json({
         result,
         message: "you get this delivery"
      })
   }
}