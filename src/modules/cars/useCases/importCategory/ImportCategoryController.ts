import {Request, Response} from 'express'
import {container} from 'tsyringe'

import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
    async handle(req: Request, res:Response): Promise<Response>{
     const {file} = req

     const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
     
     if(file === undefined)
     return res.status(400).send({error: 'File is undefined'})

     try{
     await importCategoryUseCase.execute(file!)
     }catch(err: any){
        return res.status(400).json({message: err.message})
     }
 
     return res.status(200).send()
    }
}

export {ImportCategoryController}