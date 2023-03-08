import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"

export const validateBodyMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): Response | void => {
    
    const validatedBody = schema.parse(req.body)
    req.body = validatedBody
    return next()
}