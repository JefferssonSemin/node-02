import {inject, injectable} from 'tsyringe'

import { SpecificationRepository } from '@modules/cars/infra/repositories/SpecificationRepository'
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification'

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