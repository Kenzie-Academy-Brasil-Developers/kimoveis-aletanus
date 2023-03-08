import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IReturnCreateUser, IUpdateUser } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/user.schemas"

export const patchUserService = async (userData: IUpdateUser, userId: number): Promise<IReturnCreateUser> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const user = await userRepo.findOneBy({
        id: userId
    })
    const updatedUser = userRepo.create({
        ...user,
        ...userData
    })
    await userRepo.save(updatedUser)
    return returnUserSchema.parse(updatedUser)
}