import { union, z } from "zod"
import { addressSchema, createAddressSchema } from "./address.schemas"
import { categorySchema } from "./category.schemas"

export const realEstateSchema = z.object({
    id: z.number().positive().int(),
    value: union([
        z.string().min(0).max(9999999999.99).transform((val) => parseFloat(val).toFixed(2)),
        z.number().min(0).max(9999999999.99).transform((val) => parseFloat(val.toFixed(2))),
    ]),
    size: z.number().int().positive(),
    address: addressSchema,
    category: categorySchema,
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    address: true,
    category: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    address: createAddressSchema,
    categoryId: z.number()
})

export const returnRealEstateSchema = realEstateSchema

export const returnAllRealEstateSchema = returnRealEstateSchema.array()