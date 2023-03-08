import { Router } from "express"
import { createUserController, deleteUserController, getUsersController, patchUserController } from "../controllers/user/user.controllers"
import { checkIfEmailAlreadyExistsMiddleware } from "../middlewares/users/checkIfEmailExists"
import { checkIfUserIsAdminMiddleware } from "../middlewares/users/checkIfUserIsAdmin"
import { checkUserByIdMiddleWare } from "../middlewares/users/checkUserById"
import { validateBodyMiddleware } from "../middlewares/users/validateBody"
import { validateTokenMiddleware } from "../middlewares/users/validateToken"
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas"

export const UsersRoutes: Router = Router()

UsersRoutes.post( "",
    validateBodyMiddleware(createUserSchema),
    checkIfEmailAlreadyExistsMiddleware,
    createUserController
)

UsersRoutes.get( "",
    validateTokenMiddleware,
    checkIfUserIsAdminMiddleware,
    getUsersController
)

UsersRoutes.patch("/:id",
    validateTokenMiddleware,
    checkIfUserIsAdminMiddleware,
    checkUserByIdMiddleWare,
    validateBodyMiddleware(updateUserSchema),
    checkIfEmailAlreadyExistsMiddleware,
    patchUserController
)

UsersRoutes.delete("/:id",
    validateTokenMiddleware,
    checkIfUserIsAdminMiddleware,
    checkUserByIdMiddleWare,
    deleteUserController
)