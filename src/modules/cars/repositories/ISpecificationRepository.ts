import { Category } from "../entities/Category";


interface ICreateSpecificationDTO{
    name: string, 
    description: string
}

interface ISpecificationRepository{
    findByName(name:string): Promise<Category | null>
    list(): Promise<Category[]>
    create({name, description}:ICreateSpecificationDTO):Promise<void>
}

export {ISpecificationRepository, ICreateSpecificationDTO}