import { Request, Response } from "express";
import {container} from 'tsyringe'

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {

    handle(req:Request, res: Response): Response{

        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)

        const specifications = listSpecificationUseCase.execute()

        return res.status(200).json(specifications)
    }
}

export {ListSpecificationController}