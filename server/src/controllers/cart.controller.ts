import {Request, Response, NextFunction} from "express"
import cartServices from "../services/cart.services"
import {CartSChema} from "../schema/cart.dto"
import {SendResponse} from "../utils/response"
import type {ItemType} from "../services/cart.services"
import {CartInput} from "../services/cart.services"


interface CartRequest extends Request {
    body: {
        items: ItemType[];
    }
}
class CartController {
    async addToCart(req: CartRequest, res: Response, next: NextFunction) {
        try{
            if(!res.locals.user){
                return SendResponse(res, "Login to continue adding to cart", false, 401)
            }
            const userId = res.locals.user.userId

            const validatedItems = CartSChema.parse(req.body)
            const {totalPrice, totalQuantity} = await cartServices.calculateTotalPrice(validatedItems.items)
            const cartData:CartInput = {
                ...validatedItems,
                userId: res.locals.user.userId as string,
                totalPrice,
                totalQuantity
            }
            const cartItems = await cartServices.addItems(cartData)
            console.log(cartItems)
            return SendResponse(res, "Items added to cart successfully", true, 200)
        } catch(err) {
            next(err)
        }
    }
}

const cartContoller = new CartController;
export default cartContoller;
