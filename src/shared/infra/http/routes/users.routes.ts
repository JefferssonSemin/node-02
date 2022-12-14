import {Router} from 'express'
import multer from 'multer'

import uploadConfig from '../../../../config/upload'
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRoutes = Router()

const updloadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.use(ensureAuthenticated)
usersRoutes.patch("/avatar", updloadAvatar.single('avatar'), updateUserAvatarController.handle)

export {usersRoutes}