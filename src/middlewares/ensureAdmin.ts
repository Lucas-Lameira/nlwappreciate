import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

   const { user_id } = request;

   const userRepositories = getCustomRepository(UsersRepositories);

   const user = await userRepositories.findOne(user_id)

   if (user?.admin) {
      return next();
   }

   //401 = unauthorized
   return response.status(401).json({
      error: "unauthorized, you are not an admin"
   });
}