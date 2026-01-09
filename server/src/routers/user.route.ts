import UserController from "../controllers/user.controller"
import express from 'express'
const router = express.Router()


router.post("/register", UserController.createUser)
router.post("/login", UserController.login)

export default router
