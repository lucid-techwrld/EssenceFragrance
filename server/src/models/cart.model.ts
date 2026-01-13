import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    userId:  {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    items: [
    {
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1,
            required: true
        }
    },
    ],
    totalQuantity: {
        type: Number,
        default: 1,
        required: true
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    },
}, {timestamps: true})

export default mongoose.model('Cart', cartSchema);
