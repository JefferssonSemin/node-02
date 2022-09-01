import {Router} from 'express'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesUseCase = new ListCategoriesController()


categoriesRoutes.post("/", createCategoryController.handle)
categoriesRoutes.get("/", listCategoriesUseCase.handle)
categoriesRoutes.post("/import", importCategoryController.handle)

export {categoriesRoutes}