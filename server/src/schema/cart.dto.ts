import { z } from "zod"

const CartItemSchema = z.object({
    product: z.string().min(1),
    quantity: z.number().min(1).default(1),
    price: z.number().min(0).default(0)
})

export const CartSChema = z.object({
    items: z.array(CartItemSchema).nonempty()
})

export type CartSChemaDTO =  z.infer<typeof CartSChema>
