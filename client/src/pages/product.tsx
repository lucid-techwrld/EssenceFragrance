import { useState, useEffect } from "react"
import image from "../assets/images/perfume6.webp"
import ProductCard from "../components/product.card"
import { useProductStore } from "../store/product.store"
import ViewProduct from '../components/view.product'
import type {Product} from "../types/product.types"



function Product() {
    const productCategories: string[] = [
        "ALL COLLECTIONS",
        "MEN'S",
        "WOMEN'S",
        "WOODY",
        "FLORAL",
    ]

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const [activeCategory, setActiveCategory] = useState<string>(
        productCategories[0]
    )

       const { products, fetchProducts, isLoading } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative h-[250px] w-full">
                <img
                    src={image}
                    alt="Perfume image"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
                    <h2 className="text-sm uppercase tracking-wide">
                        Home | Products
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold">PRODUCTS</h1>
                </div>
            </div>

            {/* Categories */}
            <ul className="mx-auto mt-10 flex w-fit gap-8 border-b border-gray-200">
                {productCategories.map((category) => (
                    <li
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer pb-2 text-sm font-medium transition-all duration-300
                            ${
                                activeCategory === category
                                    ? "border-b-2 border-black text-black"
                                    : "text-gray-400 hover:text-black"
                            }`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            {/* Products Grid */}
            {isLoading ?
                <p>Loading products...</p>
            :
                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            prevPrice={product.price + 27.4}
                            images={product.imageUrl}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            }
            {selectedProduct && (
                <ViewProduct
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={(id, qty) => {
                        //addToCart(id, qty)
                        setSelectedProduct(null)
                    }}
                />
            )}

        </div>
    )
}

export default Product
