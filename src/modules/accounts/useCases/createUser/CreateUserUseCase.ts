import {injectable, inject} from 'tsyringe'
import { hash } from 'bcryptjs'
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password, driver_license}: ICreateUserDTO) : Promise<void>{

        const passwordHash = await hash(password, 8) 

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists)
            throw new Error('User already exists')
        

        await this.userRepository.create({name, email, password: passwordHash, driver_license})
    }
}

export {CreateUserUseCase}