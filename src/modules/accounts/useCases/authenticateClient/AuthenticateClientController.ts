import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';
import { Request, Response } from "express";

export class AuthenticateClientController {
   async handle(req: Request, res: Response){
      const { password, username } = req.body

      const authenticateClientUseCase = new AuthenticateClientUseCase()
      const result = await authenticateClientUseCase.execute({
         password,
         username
      })

      return res.status(200).json({
         result,
         message: "you're logged now"
      })
   }
}