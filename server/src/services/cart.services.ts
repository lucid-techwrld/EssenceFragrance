import Cart from "../models/cart.model"
import User from "../models/user.model"
import Product from "../models/product.model"
import AppError from "../middlewares/errors/error"



export type ItemType = {
    product: string;
    quantity: number;
}

export interface CartInput {
    userId: string;
    items: ItemType[];
    totalPrice: number;
    totalQuantity: number
}

class CartService {
    async addItemsToCart(
    userId: string,
    incomingItems: ItemType[]
    ) {
        let cart = await Cart.findOne({ userId })

        if (!cart) {
            const { totalPrice, totalQuantity } = await this.calculateTotalPrice(incomingItems)

            return Cart.create({
                userId,
                items: incomingItems,
                totalPrice,
                totalQuantity
            })
        }

        for (const item of incomingItems) {
            const existingItem = cart.items.find(
                i => i.product.toString() === item.product
            )

            if (existingItem) {
                existingItem.quantity += item.quantity
            } else {
                cart.items.push(item)
            }
        }

        const normalizedItems: ItemType[] = cart.items.map(item => ({
            product: item.product.toString(),
            quantity: item.quantity
        }))

        const { totalPrice, totalQuantity } = await this.calculateTotalPrice(normalizedItems)


        cart.totalPrice = totalPrice
        cart.totalQuantity = totalQuantity

        await cart.save()
        return cart
    }


    async calculateTotalPrice(items: ItemType[]) {
    let totalPrice = 0
    let totalQuantity = 0

    for (const item of items) {
        const product = await Product.findById(item.product)
        if (!product) {
            throw new AppError("Product not found", 404)
        }

        totalPrice += product.price * item.quantity
        totalQuantity += item.quantity
    }

    return { totalPrice, totalQuantity }
}
}


const cartServices = new CartService
export default cartServices;
