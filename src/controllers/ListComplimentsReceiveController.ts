import { Request, Response } from "express";
import { ListComplimentsReceiveService } from "../services/ListComplimentsReceiveService";

export class ListComplimentsReceiveController {
   async handle(request: Request, response: Response) {
      const { user_id } = request;

      const listComplimentsReceiveService = new ListComplimentsReceiveService();

      const compliments = await listComplimentsReceiveService.execute(user_id);

      return response.status(200).json(compliments)
   }
}