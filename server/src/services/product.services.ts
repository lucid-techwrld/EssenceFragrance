import {ProductDTO} from "../schema/product.dto"
import AppError from "../middlewares/errors/error"
import Product from "../models/product.model"



class ProductServices {
    async addProduct(product: ProductDTO) {
        const existingProduct = await Product.findOne({name: product.name})
        if(existingProduct) {
            throw new AppError("Product with the same name already exist")
        }
        const newProduct = await Product.create(product)
        return newProduct
    }

    async fetchProducts(){
        const products = await Product.find({})
        return products
    }

    async fetchProduct(id: string) {
        const product = await Product.find({_id: id})
        if(!product) {
            throw new AppError("Prodduct does not exist", 404)
        }
        return product
    }
}

const ProductService = new ProductServices()
export default ProductService
