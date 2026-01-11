import Cart from "../models/cart.model"
import User from "../models/user.model"
import AppError from "../middlewares/errors/error"

export type ItemType = {
    product: string;
    quantity: number;
    price: number
}

export interface CartInput {
    userId: string;
    items: ItemType[];
    totalPrice: number;
    totalQuantity: number
}

class CartService {
    async addItems(items: CartInput) {
        if(!items) {
            throw new AppError("Cart is empty", 400)
        }
        const user = await User.findOne({_id: items.userId})
        if(!user) {
            throw new AppError("User adding item(s) to cart does not exist", 404)
        }
        console.log(user)
        const cartItems = await Cart.create(items)
        return cartItems;
    }

    async calculateTotalPrice(items: ItemType[]) {
        const totalItemPrice = items.map((item, idx)=> {
            return item.price * item.quantity
        })
        const totalPrice = totalItemPrice.reduce((accumulator, item) => {
            return accumulator += item
        })

        const totalQuantity = items.reduce((accumulator, item) => {
            return accumulator += item.quantity
        }, 0)

        return {totalPrice, totalQuantity}
    }
}

const cartServices = new CartService
export default cartServices;
