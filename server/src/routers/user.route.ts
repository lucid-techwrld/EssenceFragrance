import UserController from "../controllers/user.controller"
import {requireAuth} from "../middlewares/auth.middleware"
import express from 'express'
const router = express.Router()


router.get("/refresh", UserController.refresh)
router.get("/user", requireAuth, UserController.fetchUserDetails)
router.get("/logout", UserController.logOut)


router.post("/register", UserController.createUser)
router.post("/login", UserController.login)


export default router
