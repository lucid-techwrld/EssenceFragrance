import { z } from "zod"

const CartItemSchema = z.object({
    product: z.string().min(1),
    quantity: z.number().min(1).default(1),
})


export const CartSchema = z.object({
    items: z.array(CartItemSchema).nonempty()
})

export type CartSchemaDTO =  z.infer<typeof CartSchema>
