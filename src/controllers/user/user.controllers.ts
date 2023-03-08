import { Request, Response } from "express"
import { ICreateUser, IListUsers, ILogin } from "../../interfaces/user.interfaces"
import { createUserService } from "../../services"
import { deleteUSerService } from "../../services/user/deleteUser.service"
import { getUsersService } from "../../services/user/getUsers.service"
import { loginUserService } from "../../services/user/loginUser.service"
import { patchUserService } from "../../services/user/patchUser.service"

export const loginUserController = async (req: Request, res: Response): Promise<Response> => {

    const loginData: ILogin = req.body 
    const token: string = await loginUserService(loginData)
    return res.status(200).json({ token: token })

}

export const createUserController = async (req: Request, res: Response) => {
  
    const userData: ICreateUser = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const getUsersController = async (req: Request, res: Response): Promise<Response> => {

    const usersList: IListUsers = await getUsersService()
    return res.status(200).json(usersList)
}

export const patchUserController = async (req: Request, res: Response) => {

    const userId: number = Number(req.params.id)
    const updatedUser = await patchUserService(req.body, userId)
    return res.status(200).json(updatedUser)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = Number(req.params.id)
    await deleteUSerService(userId)
    return res.status(204).send()
}