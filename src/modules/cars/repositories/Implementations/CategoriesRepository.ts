import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./../ICategoriesRepository";

import {AppDataSource} from '../../../../database/data-source'
import { Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository{

    private categoryRepository = AppDataSource.getRepository(Category)    

    async create({name, description}: ICreateCategoryDTO) : Promise<void> {
        const repository = AppDataSource.getRepository(Category)

        const category = repository.create({name, description})
        
        await repository.save(category)
    }

    async list(): Promise<Category[]>{
        return await this.categoryRepository.find()
    }

    async findByName(name:string): Promise<Category|null>{
      return await this.categoryRepository.findOne({where: { name: name }})
    }
}

export {CategoriesRepository}