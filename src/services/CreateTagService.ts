import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class CreateTagService {
   async execute(name: string) {
      const tagsRepositories = getCustomRepository(TagsRepositories);

      if (!name) {
         throw new Error("nameless tag"); //nameless
      }

      // select * from tags where name = 'name';
      const tagAlreadyExists = await tagsRepositories.findOne({ name });

      if (tagAlreadyExists) {
         throw new Error("Tag name already exists");
      }

      const tag = tagsRepositories.create({ name });

      await tagsRepositories.save(tag);
      return tag;
   }
}