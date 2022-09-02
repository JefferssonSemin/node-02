import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import swaggerui from 'swagger-ui-express'

import "./shared/container"
import "./database/data-source"

import { router } from "./routes"
import swaggerfile from './swagger.json'
import { AppError } from "./errors/AppError"

const app = express()

app.use(express.json())

app.use("/swagger", swaggerui.serve, swaggerui.setup(swaggerfile))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) 
        return res.status(err.statusCode).json({message: err.message})

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log("server is running!"))
