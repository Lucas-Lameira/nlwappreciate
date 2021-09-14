import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IComplementRequest {
   tag_id: string;
   user_sender: string;
   user_receiver: string;
   message: string;
}

export class CreateComplimentService {
   async execute({ message, user_receiver, user_sender, tag_id }: IComplementRequest) {
      const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
      const usersRepositories = getCustomRepository(UsersRepositories);

      const userReceiverExists = await usersRepositories.findOne(user_receiver);

      if (user_sender === user_receiver) {
         throw new Error("You can't send this to your self");
      }

      if (!userReceiverExists) {
         throw new Error("User receiver does not exists");
      }

      const compliment = complimentsRepositories.create({
         tag_id,
         user_receiver,
         user_sender,
         message
      });

      complimentsRepositories.save(compliment);

      return compliment;
   }
}