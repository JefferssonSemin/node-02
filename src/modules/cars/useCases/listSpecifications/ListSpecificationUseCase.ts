import {inject, injectable} from 'tsyringe'

import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from '@modules/cars/repositories/Implementations/SpecificationRepository';


@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: SpecificationRepository) {}

    async execute(): Promise<Specification[]>{
        return await this.specificationRepository.list()
    }
}

export {ListSpecificationUseCase}