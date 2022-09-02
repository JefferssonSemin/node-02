import {Request, Response} from 'express'
import {container} from 'tsyringe'

import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
    async handle(req: Request, res:Response): Promise<Response>{
     const {file} = req

     const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
     
     if(file === undefined)
     return res.status(400).send({error: 'File is undefined'})
     
     await importCategoryUseCase.execute(file!)
 
     return res.status(200).send()
    }
}

export {ImportCategoryController}