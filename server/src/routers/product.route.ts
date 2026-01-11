import ProductController from "../controllers/product.controller"
import express from "express"
const router = express.Router()


router.get("/all", ProductController.fetchProducts)
router.get("/:productId", ProductController.fetchProduct)


export default router
