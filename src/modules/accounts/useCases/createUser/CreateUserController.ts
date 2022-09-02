import {Request, Response} from 'express'
import {container} from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
    constructor(){
        
    }

    async handle(req: Request, res: Response): Promise<Response>{

        const {name, email, password, driver_license} = req.body
        
        const createUserCase = container.resolve(CreateUserUseCase)

        try{
        await createUserCase.execute({name, email, password, driver_license})
        }catch(err: any) {
            return res.status(400).json({message: err.message})
        }

        return res.status(201).send()
    }
}

export {CreateUserController}