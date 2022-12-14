import { container} from 'tsyringe'

import { UserRepository } from '@modules/accounts/infra/repositories/implementations/UserRepository'
import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository'
import { SpecificationRepository } from '@modules/cars/infra/repositories/SpecificationRepository'
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { CarsRepository } from '@modules/cars/infra/repositories/CarsRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)