import { Router } from "express"
import { createRealEstateController, getAllRealEstatesControllers } from "../controllers/realEstate/realEstate.controllers"
import { checkIfUserIsAdminMiddleware } from "../middlewares/users/checkIfUserIsAdmin"
import { validateBodyMiddleware } from "../middlewares/users/validateBody"
import { validateTokenMiddleware } from "../middlewares/users/validateToken"
import { createRealEstateSchema } from "../schemas/realState.schemas"

export const RealEstatesRoutes: Router = Router()

RealEstatesRoutes.post("",
    validateTokenMiddleware,
    checkIfUserIsAdminMiddleware,
    validateBodyMiddleware(createRealEstateSchema),
    createRealEstateController
)

RealEstatesRoutes.get("", getAllRealEstatesControllers)