import React from "react"

interface ProductProps  {
    images: string[];
    name: string;
    price: number;
    prevPrice?: number
}
const ProductCard: React.FC<ProductProps> = ({images, name, price, prevPrice}) => {

    const formatPrice = (amt: number): string => {
        return amt.toLocaleString()
    }
    const imageSrc = images.length > 0 ? images[0] : "/placeholder.png"
    return (
        <div className="w-full h-auto">
            <div className="w-full h-[70%]">
                <img src={imageSrc} className="w-full h-full object-cover"/>
            </div>

            <div className="w-full h-[30%]">
            <p className="font-italia text-2xl text-center font-bold">{name}</p>
            {prevPrice && <p className="text-sans  text-center text-sm line-through text-red-400">₦{formatPrice(prevPrice)}</p>}
            <p className="text-sans  text-center text-sm">₦{formatPrice(price)}</p>
            </div>

        </div>
    )
}

export default ProductCard;
