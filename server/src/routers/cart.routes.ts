import express from "express"
import {requireAuth} from "../middlewares/auth.middleware"
import cartController from "../controllers/cart.controller"

const router = express.Router()

router.post("/add", requireAuth, cartController.addToCart)

export default router
