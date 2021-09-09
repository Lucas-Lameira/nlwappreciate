import { NextFunction, Request, Response } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

   const isAdmin = true;

   if (isAdmin) {
      return next();
   }

   //401 = unauthorized
   return response.status(401).json({
      error: "unauthorized, you are not an admin"
   });
}