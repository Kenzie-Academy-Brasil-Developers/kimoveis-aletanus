import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, User } from "../../entities"
import { ICategory, IListCategories } from "../../interfaces/category.interfaces"
import { returnMultiplecategoriesSchema } from "../../schemas/category.schemas"

export const getCategoriesListService = async (): Promise<IListCategories> => {

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)
    const findCategories: Array<ICategory> = await categoryRepo.find()
    const categories = returnMultiplecategoriesSchema.parse(findCategories)
    return categories
}