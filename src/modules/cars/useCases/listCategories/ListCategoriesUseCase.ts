import {inject, injectable} from 'tsyringe'

import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";

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