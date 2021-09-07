import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from 'typeorm';
interface IUserRequest {
   name: string;
   email: string;
   admin?: boolean;
}

class CreateUserService {
   async execute({ name, email, admin }: IUserRequest) {

      const userRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await userRepository.findOne({ email });

      if (!email) {
         throw new Error("Email failed or something");
      }

      if (userAlreadyExists) {
         throw new Error("User Already exists");
      }

      const user = userRepository.create({
         name,
         email,
         admin
      })

      await userRepository.save(user);

      return user;
   }
}

export default CreateUserService;