import { z } from "zod"
import { createScheduleSchema } from "../schemas/schedule.schemas"

export type ICreateSchedule  = z.infer<typeof createScheduleSchema>