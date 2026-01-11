import {Response, Request, NextFunction} from "express"
import ProductService from "../services/product.services"
import {ProductSchema, COLLECTIONS} from "../schema/product.dto"
import {SendResponse} from "../utils/response"

interface ProductRequest extends Request {
    body: {
        imageUrl: string[];
        oldPrice?: number;
        price: number;
        description: string;
        quantity: number;
        name: string;
        collection: COLLECTIONS
    }
}




class Product{
    async addProduct(req: ProductRequest, res: Response, next: NextFunction){
        try{
            const validatedProduct = ProductSchema.parse(req.body)
            const product = await ProductService.addProduct(validatedProduct)
            return SendResponse(res, "Product created successfully", true, 201, product)
        } catch(err){
            next(err)
        }
    }

    async fetchProducts(req: Request, res: Response, next: NextFunction){
        try{
            const products = await ProductService.fetchProducts()
            return SendResponse(res, "Products fetched successfully", true, 200, products)
        } catch(err) {
            next(err)
        }
    }

    async fetchProduct(req: Request<{productId: string}>, res: Response, next: NextFunction){
        try{
            const {productId} = req.params
            if(!productId) {
                return SendResponse(res,"Please provide a product id", false, 400)
            }
            const product = await ProductService.fetchProduct(productId)
            return SendResponse(res, "Product fetched successfully", true, 200, product)
        } catch(err) {
            next(err)
        }
    }
}

const ProductController = new Product()
export default ProductController;
