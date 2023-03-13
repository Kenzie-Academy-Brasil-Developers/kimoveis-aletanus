import { Router } from "express"
import { createScheduleController, getAllSchedulesForARealStateController } from "../controllers/schedule/schedule.controllers"
import { checkIfUserIsAdminMiddleware } from "../middlewares/users/checkIfUserIsAdmin"
import { validateBodyMiddleware } from "../middlewares/users/validateBody"
import { validateTokenMiddleware } from "../middlewares/users/validateToken"
import { createScheduleSchema } from "../schemas/schedule.schemas"

export const ScheduleRoutes: Router = Router()

ScheduleRoutes.post("",
    validateTokenMiddleware,
    validateBodyMiddleware(createScheduleSchema),
    createScheduleController
)

ScheduleRoutes.get("/realEstate/:id",
    validateTokenMiddleware,
    checkIfUserIsAdminMiddleware,
    getAllSchedulesForARealStateController
)