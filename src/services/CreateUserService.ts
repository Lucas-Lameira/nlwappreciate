import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from 'typeorm';
import { hash } from "bcryptjs";


interface IUserRequest {
   name: string;
   email: string;
   password: string;
   admin?: boolean;
}

class CreateUserService {
   async execute({ name, email, password, admin = false }: IUserRequest) {

      const userRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await userRepository.findOne({ email });

      if (!email) {
         throw new Error("Email failed or something");
      }

      if (userAlreadyExists) {
         throw new Error("User Already exists");
      }

      const passwordHash = await hash(password, 8);

      const user = userRepository.create({
         name,
         email,
         password: passwordHash,
         admin
      })

      await userRepository.save(user);

      return user;
   }
}

export default CreateUserService;