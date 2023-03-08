import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { ILogin } from "../../interfaces/user.interfaces"
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"

export const loginUserService = async (loginData: ILogin): Promise<string> => {
    
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepo.findOneBy({
        email: loginData.email 
    })

    if (!user) {
        throw new AppError("Invalid credentials", 401)
    }
    const comparePassWord: boolean = await compare(loginData.password, user.password)
    if (!comparePassWord) {
        throw new AppError("Invalid credentials", 401)
    }
    const token: string = jwt.sign(
        { 
            admin: user.admin
        },
        String(process.env.SECRET_KEY!),
        { 
            expiresIn: "24h",
            subject: String(user.id)
        }
    )
    return token
}