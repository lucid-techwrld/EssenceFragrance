import HeroSection from "../components/hero"
import UpdateSection from "../components/update"
import Collection from "../components/collection"
import perfume from "../assets/images/perfume2.jpeg"
import perfume2 from "../assets/images/perfume3.jpg"
import perfume3 from "../assets/images/perfume4.jpeg"
import Hero2 from "../components/hero2"
import ProductShowCase from "../components/productshowcase"

function Home() {
    return (
        <>
            <HeroSection/>
            <UpdateSection/>
            <div className="w-full h-[570px] py-5 mb-5 flex items-center justify-center">
                <div className="w-full h-full max-w-6xl  grid grid-cols-3 gap-5 justify-items-center">
                    <Collection image={perfume} label="Women's Fragrances Perfumes" description="Feminine elegance, perfectly perfumed. Timless scents for extraordinary women" aWord="SHOP COLLECTION"/>
                    <Collection image={perfume2} label="Gold Crust & Cracked Perfumes" description="One of the most definning fragrance notes of Gold Crust is cinnamon" aWord="SHOP COLLECTION"/>
                    <Collection image={perfume3} label="Elegant Men Body Spray" description="Refined aromas for the distinguished man. Timeless scents that command attention with subtle grace" aWord="SHOP COLLECTION"/>
                </div>
            </div>
            <Hero2/>
            <ProductShowCase/>
        </>
    )
}

export default Home
