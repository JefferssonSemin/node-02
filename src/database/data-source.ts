
import {DataSource} from 'typeorm'
import { Category } from '../modules/cars/entities/Category'
import { Specification } from '../modules/cars/entities/Specification'
import { createCategory1661954139575 } from './migrations/1661954139575-create-category'
import { createSpecification1661968399071 } from './migrations/1661968399071-create-specification'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_node",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "node02",
    synchronize: false,
    entities: [ Category, Specification],
    migrations: [createCategory1661954139575, createSpecification1661968399071]
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))