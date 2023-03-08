import { hashSync } from "bcryptjs"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { ICreateUser, IReturnCreateUser } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/user.schemas"

export const createUserService = async (userData: ICreateUser): Promise<IReturnCreateUser> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const hashedPassword = hashSync(userData.password)
    const user: User = userRepo.create({ ...userData, password: hashedPassword })
    await userRepo.save(user)
    const newUser = returnUserSchema.parse(user)
    return newUser
}