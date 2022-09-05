
import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase
let userRepositoryInmemory: UserRepositoryInMemory

describe("should be able create an user", () => {

})

describe("Authenticate a user", () => {
    beforeEach(() => {
        userRepositoryInmemory = new UserRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInmemory)
        createUserUseCase= new CreateUserUseCase(userRepositoryInmemory)
    })

    it("should be able to authenticate an user",async () => {
        const user: ICreateUserDTO = {
            driver_license: "001384",
            email: "user@example.example",
            password: "12345",
            name: "User test"
        }

        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        }) 

        expect(result).toHaveProperty('token')
    })

    it("should not be able to authenticate an nonexistent user",async ()=>{
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@example.example",
                password: "12345"
            })

        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to authenticate a user with wrong password", async ()=>{
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "001384",
                email: "user@example.example",
                password: "12345",
                name: "User test"
            }

            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrect password" 
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})