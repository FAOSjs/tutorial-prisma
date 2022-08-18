import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';
import { Request, Response } from "express";


export class FindAllAvailableController {
   async handle(req: Request, res: Response){
      const findAllAvailableUseCase = new FindAllAvailableUseCase()
      const deliveries = await findAllAvailableUseCase.execute()

      return res.status(200).json({
         result: {deliveries},
         message: "success"
      })
   }
}