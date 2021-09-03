import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

/* 
   put - alterar uma informação
   patch - alterar uma informação específica
 */

app.get('/', (req: Request, res: Response) => {
   return res.send("Hello");
})

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`)
})