import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { ICategory, IReturnCategory } from "../../interfaces/category.interfaces"
import { categorySchema } from "../../schemas/category.schemas"

export const postCategoryService = async (categoryData: ICategory): Promise<IReturnCategory> => {

  const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)
  const category: Category = categoryRepo.create(categoryData)
  await categoryRepo.save(category)
  const newCategory = categorySchema.parse(category)
  return newCategory
}