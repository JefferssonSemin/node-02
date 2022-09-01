import "reflect-metadata"
import express from "express"
import swaggerui from 'swagger-ui-express'

import "./shared/container"
import "./database/data-source"

import { router } from "./routes"
import swaggerfile from './swagger.json'

const app = express()

app.use(express.json())

app.use("/swagger", swaggerui.serve, swaggerui.setup(swaggerfile))

app.use(router)

app.listen(3333, () => console.log("server is running!"))

