import { useState } from "react"
import type {Product} from "../types/product.types"


interface ViewProductProps {
    product: Product
    onClose: () => void
    onAddToCart: (productId: string, quantity: number) => void
}

function ViewProduct({
    product,
    onClose,
    onAddToCart,
}: ViewProductProps) {
    const [quantity, setQuantity] = useState(1)

    const increase = () => setQuantity((q) => q + 1)
    const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* Modal Container */}
            <div className="relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl font-bold text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* LEFT: Images */}
                    <div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.imageUrl.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={product.name}
                                    className="h-72 w-72 flex-shrink-0 rounded-md object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                {product.name}
                            </h2>

                            <p className="mt-2 text-xl font-semibold text-blue-600">
                                ₦{product.price.toLocaleString()}
                            </p>

                            <p className="mt-4 text-sm text-gray-600">
                                {product.description}
                            </p>
                        </div>

                        {/* Quantity + CTA */}
                        <div className="mt-6 space-y-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={decrease}
                                    className="h-10 w-10 rounded-md border text-lg"
                                >
                                    −
                                </button>

                                <span className="text-lg font-semibold">
                                    {quantity}
                                </span>

                                <button
                                    onClick={increase}
                                    className="h-10 w-10 rounded-md border text-lg"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <button
                                onClick={() =>
                                    onAddToCart(product.id, quantity)
                                }
                                className="h-12 w-full rounded-md bg-blue-600 text-white transition hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
