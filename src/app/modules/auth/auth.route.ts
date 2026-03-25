import { Router } from "express"
import { AuthController } from "./auth.controller"
import { validateRequest } from "../../middleware/validateRequest"
import { createUserSchema } from "./auth.validation"

const router=Router()
router.post("/register",validateRequest(createUserSchema), AuthController.UserRegister)
router.post("/login", AuthController.loginUser)

export const AuthRouters=router
