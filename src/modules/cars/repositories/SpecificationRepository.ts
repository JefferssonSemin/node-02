import { Category } from "../model/Category";
import { Specification } from "../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{

    private specifications: Specification[]

    constructor() {
        this.specifications = []
    }

    findByName(name: string): Category | undefined {
        return this.specifications.find(spec => spec.name === name)
        }
    
    list(): Category[] {
        return this.specifications
    }

    create({ name, description }: ICreateSpecificationDTO): void {
      const specification = new Specification()

      Object.assign(specification, {
        name,
        description,
        created_at : new Date()
    }) 

    this.specifications.push(specification)
      
    }
}

export {SpecificationRepository}