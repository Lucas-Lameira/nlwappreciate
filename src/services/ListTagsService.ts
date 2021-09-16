import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

export class ListTagsService {
   async execute() {
      const tagRespositories = getCustomRepository(TagsRepositories);

      const tags = await tagRespositories.find();

      return tags;
   }
}