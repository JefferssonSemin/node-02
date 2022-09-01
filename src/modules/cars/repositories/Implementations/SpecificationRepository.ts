import { ISpecificationRepository, ICreateSpecificationDTO } from "./../ISpecificationRepository";
import {AppDataSource} from '../../../../database/data-source'
import { Specification } from "../../entities/Specification";

class SpecificationRepository implements ISpecificationRepository{
   
    private specificationRepository = AppDataSource.getRepository(Specification)    

    async findByName(name: string): Promise<Specification | null> {
        return await this.specificationRepository.findOne({where: {name: name}})
        }
    
    async list(): Promise<Specification[]> {
        return  await this.specificationRepository.find();
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.specificationRepository.create({ 
        name, 
        description
    })

    this.specificationRepository.save(specification)
    }
}

export {SpecificationRepository}