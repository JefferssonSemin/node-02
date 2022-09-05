import {DataSource} from 'typeorm'

import { User } from '@modules/accounts/infra/typeorm/entities/User'
import { Category } from '@modules/cars/infra/typeorm/entities/Category'
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification'
import { createCategory1661954139575 } from './migrations/1661954139575-create-category'
import { createSpecification1661968399071 } from './migrations/1661968399071-create-specification'
import { createUsers1662057959496 } from './migrations/1662057959496-create-users'
import { alterUserDeleteName1662060865849 } from './migrations/1662060865849-alter-user-delete-name'
import { alterUserAddAvatar1662146984544 } from './migrations/1662146984544-alter-user-add-avatar'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_node",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "node02",
    synchronize: false,
    entities: [ Category, Specification, User],
    migrations: [createCategory1661954139575, createSpecification1661968399071, createUsers1662057959496,
        alterUserDeleteName1662060865849, alterUserAddAvatar1662146984544
    ]
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))