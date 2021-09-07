import "reflect-metadata"; //typeorm
import express from 'express';
import { router } from './routes';

import './database'; // index.ts

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`)
})