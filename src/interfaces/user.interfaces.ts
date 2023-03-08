import { DeepPartial } from "typeorm"
import { z } from "zod"
import { userSchema, createUserSchema, returnUserSchema, returnMultipleUsersSchema, loginSchema } from "../schemas/user.schemas"

export type IUser = z.infer<typeof userSchema>

export type ICreateUser = z.infer<typeof createUserSchema>

export type IReturnCreateUser = z.infer<typeof returnUserSchema>

export type IListUsers = z.infer<typeof returnMultipleUsersSchema>

export type ILogin = z.infer<typeof loginSchema>

export type IUpdateUser = DeepPartial<ICreateUser>