import "express-async-errors"
import express, { Application } from 'express'
import { handleErrors } from './errors'
import { UsersRoutes } from './routes/user.routes'
import { LoginRoutes } from "./routes/login.routes"

const app: Application = express()
app.use(express.json())

app.use("/login", LoginRoutes)
app.use("/users", UsersRoutes)


app.use(handleErrors)

export default app