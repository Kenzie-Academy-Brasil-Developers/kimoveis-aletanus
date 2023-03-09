import { Router } from "express"
import { getCategoriesListController, postCategoryController } from "../controllers/category/category.controllers"
import { checkIfCategoryExistsMiddleware } from "../middlewares/category/checkIfCategoryExists"
import { checkIfUserIsAdminMiddleware } from "../middlewares/users/checkIfUserIsAdmin"
import { validateBodyMiddleware } from "../middlewares/users/validateBody"
import { validateTokenMiddleware } from "../middlewares/users/validateToken"
import { createCategorySchema } from "../schemas/category.schemas"


export const CategoryRoutes: Router = Router()

CategoryRoutes.post("",
  validateTokenMiddleware,
  checkIfUserIsAdminMiddleware,
  validateBodyMiddleware(createCategorySchema),
  checkIfCategoryExistsMiddleware,
  postCategoryController
)

CategoryRoutes.get("", getCategoriesListController)