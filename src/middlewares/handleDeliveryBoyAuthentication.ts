import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
   sub: string
}

export function handleDeliveryBoyAuthentication(req: Request, res: Response, next: NextFunction) {
   const authHeader = req.headers.authorization;

   if(!authHeader){
      return res.status(401).json({
         message: "token missing"
      })
   }
   let token

   if(authHeader.includes("Bearer")) token = authHeader.split(" ")[1]
   else token = authHeader

   try {
      const {sub} = verify(token, "AHbLu4b487989u7gcr5Nuiggsg34DSF") as IPayload
      req.id_deliveryboy = sub
      return next()
   } catch (error) {
      return res.status(401).json({
         message: "invalid token"
      })
   }
}