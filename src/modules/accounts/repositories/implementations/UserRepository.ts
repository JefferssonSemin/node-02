import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

import {AppDataSource} from "../../../../database/data-source"
import { User } from "../../entities/User";

class UserRepository implements IUserRepository{
    
    private userRepository = AppDataSource.getRepository(User)
    
    async create({name, email, password, driver_license, username}: ICreateUserDTO): Promise<void> {
        
        const user = this.userRepository.create({
            name, email, password, driver_license, username
        })

        await this.userRepository.save(user);
    }
}

export {UserRepository}