import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

import {AppDataSource} from "../../../../database/data-source"
import { User } from "../../entities/User";

class UserRepository implements IUserRepository{
 
    private userRepository = AppDataSource.getRepository(User)
    
    async create({name, email, password, driver_license}: ICreateUserDTO): Promise<void> {
        
        const user = this.userRepository.create({
            name, email, password, driver_license
        })

        await this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { email: email } });
    }

    async findById(id: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { id: id } });
    }
    
}

export {UserRepository}