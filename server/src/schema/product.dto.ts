import {z} from "zod"


export enum COLLECTIONS {
    women = "Women's Fragrance Perfumes",
    men = "Men's Fragrance Perfumes",
    woody = "Woody Perfumes",
    floral = "Floral Scent Fragrance Perfumes"
}
export const ProductSchema = z.object({
    name: z.string().min(1, "Please insert product name"),
    description: z.string().min(1, "Please provide a short description for the product"),
    price: z.number().min(0, "Product price cannot be 0"),
    oldPrice: z.number().optional(),
    imageUrl: z.array(z.string()),
    collection: z.nativeEnum(COLLECTIONS),
    quantity: z.number().min(0, "Re-stock: Product quantity cannot be zero")
})

export type ProductDTO = z.infer<typeof ProductSchema>
