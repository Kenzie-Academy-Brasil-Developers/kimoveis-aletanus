import { Request, Response } from "express"
import { ICategory } from "../../interfaces/category.interfaces"
import { postCategoryService } from "../../services/category/createCategory.service"
import { getCategoriesListService } from "../../services/category/getCategoriesList.service"

export const postCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const newCategory: ICategory = await postCategoryService(req.body)
    return res.status(201).json(newCategory)
}

export const getCategoriesListController = async (req: Request, res: Response) => {

    const categoriesList: Array<ICategory> = await getCategoriesListService()
    return res.status(200).json(categoriesList)
}