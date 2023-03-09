import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"

export const deleteUSerService = async (userId: number): Promise<void> => {
    
    const userRepo:Repository<User> = AppDataSource.getRepository(User)
    const user = await userRepo.findOne({
        where: {
            id: userId
        }
    })
    await userRepo.softRemove(user!)
}