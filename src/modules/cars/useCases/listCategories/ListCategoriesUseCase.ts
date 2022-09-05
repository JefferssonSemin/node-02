import {inject, injectable} from 'tsyringe'

import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository'
import { Category } from '@modules/cars/infra/typeorm/entities/Category'

@injectable()
class ListCategoriesUseCase
 {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository) {}

    async execute(): Promise<Category[]>{
        return await this.categoriesRepository.list()
    }
}

export {ListCategoriesUseCase}