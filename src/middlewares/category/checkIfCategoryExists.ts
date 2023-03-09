import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"

export const checkIfCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const categoryName: string = req.body.name
    const userRepo = AppDataSource.getRepository(Category)
    const user = await userRepo.findOneBy({ 
        name: categoryName
    })
    if (user) {
        throw new AppError("Category already exists", 409)
    }
    return next()
}