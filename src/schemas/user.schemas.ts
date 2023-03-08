import { z } from "zod"

export const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(45),
  email: z.string().email().max(100),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
})

export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
})

export const returnUserSchema = userSchema.omit({
  password: true
})

export const returnMultipleUsersSchema = returnUserSchema.array()

export const loginSchema = userSchema.pick({
  email: true,
  password: true
})

export const updateUserSchema = createUserSchema.partial({
  name: true,
  email: true,
  password: true
}).omit({
  admin:true
})