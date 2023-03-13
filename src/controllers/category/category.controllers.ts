import { Request, Response } from "express"
import { ICategory } from "../../interfaces/category.interfaces"
import { postCategoryService } from "../../services/category/createCategory.service"
import { getCategoriesListService } from "../../services/category/getCategoriesList.service"
import { getRealStatesByCategoryService } from "../../services/category/getRealStateByCategory.service"

export const postCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const newCategory: ICategory = await postCategoryService(req.body)
    return res.status(201).json(newCategory)
}

export const getCategoriesListController = async (req: Request, res: Response) => {

    const categoriesList: Array<ICategory> = await getCategoriesListService()
    return res.status(200).json(categoriesList)
}

export const getRealStatesByCategoryController = async (req: Request, res: Response) => {

    const categoryId: number = Number(req.params.id)
    const realState = await getRealStatesByCategoryService(categoryId)
    return res.status(200).json(realState)
}