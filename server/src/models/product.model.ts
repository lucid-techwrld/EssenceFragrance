import mongoose from "mongoose"
import {COLLECTIONS} from "../schema/product.dto"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    oldPrice: {type: Number},
    quantity: {type: Number, required: true},
    imageUrl: {type: [String], default: []},
    collection: {type: String, enum: Object.values(COLLECTIONS), required: true}
},
{ timestamps: true }
)

export default mongoose.model("Product", productSchema);
