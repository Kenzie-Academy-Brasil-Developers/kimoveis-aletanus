import { Router } from 'express'
import { loginUserController } from '../controllers/user/user.controllers'
import { validateBodyMiddleware } from '../middlewares/users/validateBody'
import { loginSchema } from '../schemas/user.schemas'

export const LoginRoutes: Router = Router()

LoginRoutes.post('', validateBodyMiddleware(loginSchema), loginUserController)