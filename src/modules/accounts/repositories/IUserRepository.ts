import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../entities/User"

interface IUserRepository{

    create(createUser:ICreateUserDTO): Promise<void>
    findByEmail(email:string): Promise<User | null>
    findById(id:string): Promise<User | null>

}

export {IUserRepository}