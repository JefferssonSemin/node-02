import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest{
    name:string
    description:string
}

@injectable()
class CreateSpecificationUseCase{

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){}
 
    execute({name, description}: IRequest){

        const specificationAlreadyExists = this.specificationRepository.findByName(name)    
    
        if(specificationAlreadyExists)
        throw new Error("Category already exists");
        


        this.specificationRepository.create({name, description})
    }
}

export {CreateSpecificationUseCase}