import { Request, Response } from "express";
import { ListComplimentsSendService } from "../services/ListComplimentsSendService";

export class ListComplimentsSendController {
   async handle(request: Request, response: Response) {
      const { user_id } = request;

      const listComplimentsSendService = new ListComplimentsSendService();

      const compliments = await listComplimentsSendService.execute(user_id);

      return response.json(compliments)
   }
}