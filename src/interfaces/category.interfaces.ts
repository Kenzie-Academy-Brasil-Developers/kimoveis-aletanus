import { z } from "zod"
import { categorySchema, createCategorySchema, returnMultiplecategoriesSchema } from "../schemas/category.schemas"

export type ICategory = z.infer<typeof createCategorySchema>

export type IReturnCategory = z.infer<typeof categorySchema>

export type IListCategories = z.infer<typeof returnMultiplecategoriesSchema>