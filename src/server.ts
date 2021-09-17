import "reflect-metadata"; //typeorm
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

import './database'; // index.ts

const PORT = process.env.PORT || 3000;
const app = express();

// habilita que outras fontes tenham acesso a aplicação
app.use(cors);

// middleware pra usar json
app.use(express.json());

// usando as rotas
app.use(router);

// middleware to catch errors
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

   //throw Error
   if (error instanceof Error) {
      return response.status(400).json({
         error: error.message,
      })
   }

   return response.status(500).json({
      status: "error",
      message: "server error"
   })
})

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`)
})