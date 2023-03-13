import { z } from "zod"

export const addressSchema = z.object({
  id: z.number().positive().int(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullish(),
  city: z.string().max(20),
  state: z.string().max(2)
})

export const createAddressSchema = addressSchema.omit({
  id: true
})