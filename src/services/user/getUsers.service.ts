import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IListUsers } from "../../interfaces/user.interfaces"
import { returnMultipleUsersSchema } from "../../schemas/user.schemas"

export const getUsersService = async (): Promise<IListUsers> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const findUsers: Array<User> = await userRepo.find({
        withDeleted: true
    })
    const users = returnMultipleUsersSchema.parse(findUsers)
    return users
}