import {Request, Response, NextFunction} from "express"
import cartServices from "../services/cart.services"
import {CartSchema} from "../schema/cart.dto"
import {SendResponse} from "../utils/response"
import type {ItemType} from "../services/cart.services"
import {CartSchemaDTO} from "../schema/cart.dto"


type CartRequest = Request<{}, {}, CartSchemaDTO>;

class CartController {
    async addToCart(req: CartRequest, res: Response, next: NextFunction) {
        try{
            if(!res.locals.user){
                return SendResponse(res, "Login to continue adding to cart", false, 401)
            }
            const userId = res.locals.user.userId as string

            const validatedItems = CartSchema.parse(req.body)
            //const {totalPrice, totalQuantity} = await cartServices.calculateTotalPrice(validatedItems.items)
            /*const cartData:CartInput = {
                items: validatedItems.items,
                userId,
                totalPrice,
                totalQuantity
            }*/
            const cartItems = await cartServices.addItemsToCart(userId, validatedItems.items)
            console.log(cartItems)
            return SendResponse(res, "Items added to cart successfully", true, 200)
        } catch(err) {
            next(err)
        }
    }
}

const cartContoller = new CartController;
export default cartContoller;
