import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository{
    users: User[] = [];

    async create({driver_license, email, name, password}: ICreateUserDTO): Promise<void> {
        const user = new User()

        Object.assign(user, {
            driver_license, email, name, password
        })
        this.users.push(user)
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email)!
    }
    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id)!
    }
}

export {UserRepositoryInMemory}