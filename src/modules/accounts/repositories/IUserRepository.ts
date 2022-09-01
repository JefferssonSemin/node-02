import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

interface IUserRepository{

    create(createUser:ICreateUserDTO): Promise<void>
}

export {IUserRepository}