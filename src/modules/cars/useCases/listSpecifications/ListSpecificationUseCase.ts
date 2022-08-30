import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";

class ListSpecificationUseCase {
    constructor(private specificationRepository: SpecificationRepository) {}

    execute(): Specification[]{
        return this.specificationRepository.list()
    }
}

export {ListSpecificationUseCase}