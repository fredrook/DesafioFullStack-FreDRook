import { Router } from "express"
import loginUserController from "../Controllers/login/loginUser.controller"

const loginRouter = Router()

loginRouter.post("/users", loginUserController)

export default loginRouter
