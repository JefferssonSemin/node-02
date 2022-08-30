import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";

class ListCategoriesUseCase
 {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute(): Category[]{
        return this.categoriesRepository.list()
    }
}

export {ListCategoriesUseCase}