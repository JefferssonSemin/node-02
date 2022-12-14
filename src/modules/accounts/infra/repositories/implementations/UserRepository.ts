import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { User } from "../../typeorm/entities/User";

class UserRepository implements IUserRepository{
 
    private userRepository = AppDataSource.getRepository(User)
    
    async create({name, email, password, driver_license, avatar, id}: ICreateUserDTO): Promise<void> {
        
        const user = this.userRepository.create({
            name, email, password, driver_license, avatar, id
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