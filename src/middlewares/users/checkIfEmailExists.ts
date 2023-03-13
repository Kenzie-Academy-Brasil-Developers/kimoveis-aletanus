import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

export const checkIfEmailAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const UserRepository: Repository<User> = AppDataSource.getRepository(User)
  const email: string = req.body.email
  if (email) {
    const checkEmail: User | null = await UserRepository.findOne({
      where: {
        email: email,
      },
      withDeleted: true
    })
    if (checkEmail) {
      throw new AppError("Email already exists", 409)
    }
  }
  return next()
}