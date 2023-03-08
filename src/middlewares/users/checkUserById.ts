import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

export const checkUserByIdMiddleWare = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const userId: number = Number(req.params.id)
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOneBy({ id: userId })
    if(!user){
        throw new AppError("User not found", 404)
    }
    return next()
}