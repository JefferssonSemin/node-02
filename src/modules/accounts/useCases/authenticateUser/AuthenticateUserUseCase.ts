import { inject, injectable } from "tsyringe"
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

import { UserRepository } from "../../repositories/implementations/UserRepository"
import { AppError } from "../../../../errors/AppError"

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user:{
        email: string
        name: string
        }
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse>{

        const user = await this.userRepository.findByEmail(email)

        if (!user)
            throw new AppError("Email or password incorrect")

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch)
            throw new AppError("Email or password incorrect")

        const token = sign({}, "hojeehsohteste",{
            subject: user.id,
            expiresIn: '1d',
        })

        const tokenResponse: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email,
            }
        }

        return tokenResponse
    }
}

export {AuthenticateUserUseCase}