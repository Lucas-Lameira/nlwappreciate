import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from 'jsonwebtoken';

interface IAuthRequest {
   email: string;
   password: string;
}

export class AuthenticateUserService {
   async execute({ email, password }: IAuthRequest) {
      const usersRepositories = getCustomRepository(UsersRepositories);

      const user = await usersRepositories.findOne({ email });

      if (!user) {
         throw new Error("Email/Password incorrect");
      }

      // compare hashed password
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
         throw new Error("Email/Password incorrect");
      }

      const token = sign(
         {
            email: user.email
         }, "456846as8da4sd86asd631as65d4a",
         {
            subject: user.id,
            expiresIn: "1d"
         });

      return token;
   }
}