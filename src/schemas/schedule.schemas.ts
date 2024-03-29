import { z } from "zod"
import { realEstateSchema } from "./realState.schemas"
import { userSchema } from "./user.schemas"

export const scheduleSchema = z.object({
  id: z.number().int().positive(),
  date: z
    .string()
    .regex(/^\d{4}[-\/]\d{2}[-\/]\d{2}$/)
    .transform((val) => val.replace("-", "/")),
  hour: z.string().regex(/^\d{2}:\d{2}$/),
  realEstate: realEstateSchema,
  user: userSchema,
})

export const createScheduleSchema = scheduleSchema.omit({
  id: true,
  realEstate: true,
  user: true,
})
.extend({
  realEstateId: z.number().int().positive(),
})