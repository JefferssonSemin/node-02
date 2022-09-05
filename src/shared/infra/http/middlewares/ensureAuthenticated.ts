import { AppError } from "@shared/errors/AppError";
import { UserRepository } from "@modules/accounts/infra/repositories/implementations/UserRepository";
import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'

interface IPayload{
    sub : string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void>{
    
    const authHeader = req.headers.authorization

    if(!authHeader)
        throw new AppError("Token missing", 401);

    const [, token] = authHeader.split(" ");

   
       const {sub: user_id} = verify(token, "hojeehsohteste") as IPayload
       
        const userRepository = new UserRepository()
        const user = userRepository.findById(user_id)

        if(!user){
           throw new AppError("User not found", 401);
        }

        req.user = {
            id: user_id
        }

        next()

}
