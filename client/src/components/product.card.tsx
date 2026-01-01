import React from "react"

interface ProductProps  {
    image?: string;
    label: string;
    price: number;
    prevPrice?: number
}
const ProductCard: React.FC<ProductProps> = ({image, label, price, prevPrice}) => {

    const formatPrice = (amt: number): string => {
        return amt.toLocaleString()
    }
    return (
        <div className="w-full h-auto">
            <div className="w-full h-[70%]">
                <img src={image} className="w-full h-full object-cover"/>
            </div>

            <div className="w-full h-[30%]">
            <p className="font-italia text-2xl text-center font-bold">{label}</p>
            {prevPrice && <p className="text-sans  text-center text-sm line-through text-red-400">{formatPrice(prevPrice)}</p>}
            <p className="text-sans  text-center text-sm"><strong className="line-through">N</strong>{formatPrice(price)}</p>
            </div>

        </div>
    )
}

export default ProductCard;
