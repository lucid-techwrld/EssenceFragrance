interface ProductProps {
    images: string[]
    name: string
    price: number
    prevPrice?: number
    onClick: () => void
}

function ProductCard({
    images,
    name,
    price,
    prevPrice,
    onClick,
}: ProductProps) {
    const formatPrice = (amt: number): string =>
        amt.toLocaleString()

    const imageSrc =
        images.length > 0 ? images[0] : "/placeholder.png"

    return (
        <div
            onClick={onClick}
            className="w-full cursor-pointer overflow-hidden rounded-md transition hover:shadow-lg"
        >
            <div className="h-64 w-full bg-gray-100">
                <img
                    src={imageSrc}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="space-y-1 p-3 text-center">
                <p className="text-lg font-bold">{name}</p>

                {prevPrice && (
                    <p className="text-sm text-red-400 line-through">
                        ₦{formatPrice(prevPrice)}
                    </p>
                )}

                <p className="text-sm font-medium">
                    ₦{formatPrice(price)}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
