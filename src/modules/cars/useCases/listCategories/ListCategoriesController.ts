import {Response, Request} from 'express'
import { container} from 'tsyringe'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {

    handle(req: Request, res: Response): Response{
        
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
        const categories = listCategoriesUseCase.execute()
      
        return res.json(categories)
    }
}

export {ListCategoriesController}