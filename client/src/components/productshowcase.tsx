import ProductCard from "./product.card"
import perfume1 from "../assets/images/perfume8.jpg"
import perfume2 from "../assets/images/perfume7.avif"
import perfume3 from "../assets/images/perfume6.webp"
import perfume4 from "../assets/images/perfume4.jpeg"
import Collection from "./collection"

function ProductShowCase () {
    return (
        <div className="w-full h-auto p-7 text-center">
            <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                <h1 className="font-italia text-5xl font-extrabold">Most Porpular Perfumes</h1>
                <ul className="flex gap-5 text-md">
                    <li className="border-b-2 border-black font-extrabold">ALL COLLECTIONS</li>
                    <li>MEN'S</li>
                    <li>WOMEN'S</li>
                    <li>WOODY</li>
                    <li>FLORAL</li>
                </ul>
                <div className="w-full h-full max-w-6xl  grid grid-cols-4 gap-5 justify-items-center">
                    <ProductCard images={[perfume1]} name="Velvet Bloom" price={18500}/>
                    <ProductCard images={[perfume2]} name="Amber Drift" price={22000} prevPrice={23500}/>
                    <ProductCard images={[perfume3]} name="Noir Essence" price={19750}/>
                    <ProductCard images={[perfume4]} name="Luna Whisper" price={16900} prevPrice={17250}/>
                </div>

                <div className="w-full h-full max-w-6xl  grid grid-cols-2 gap-5 justify-items-center">
                    <Collection image={perfume1} label="Women's Fragrances Perfumes" description="Feminine elegance, perfectly perfumed. Timless scents for extraordinary women" aWord="DISCOVER MORE"/>
                    <Collection image={perfume2} label="Gold Crust & Cracked Perfumes" description="One of the most definning fragrance notes of Gold Crust is cinnamon" aWord="DISCOVER MORE"/>
                </div>
            </div>


        </div>
    )
}


export default ProductShowCase
