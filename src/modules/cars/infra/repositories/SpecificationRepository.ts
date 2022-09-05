import { ISpecificationRepository, ICreateSpecificationDTO } from "@modules/cars/repositories/ISpecificationRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { Specification } from "../typeorm/entities/Specification";


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

        await this.specificationRepository.save(specification)
    }
}

export {SpecificationRepository}