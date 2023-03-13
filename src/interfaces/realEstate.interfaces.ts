import { z } from "zod"
import { createRealEstateSchema, realEstateSchema, returnAllRealEstateSchema, returnRealEstateSchema } from "../schemas/realState.schemas"

export type IRealEstate = z.infer<typeof realEstateSchema>

export type ICreateRealEstate = z.infer<typeof createRealEstateSchema>

export type IReturnCreateRealEstate = z.infer<typeof returnRealEstateSchema>

export type IReturnAllRealEstatesSchema = z.infer<typeof returnAllRealEstateSchema>
