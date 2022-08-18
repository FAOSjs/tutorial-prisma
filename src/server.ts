import "express-async-errors"
import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";

const app = express()

app.use(express.json())
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
   if(err instanceof Error) {
      return res.status(400).json({
         message: err.message
      })
   }

   return res.status(500).json({
      message: "internal server error"
   })
})

app.listen(4040, () => console.log("running on: http://localhost:4040"))