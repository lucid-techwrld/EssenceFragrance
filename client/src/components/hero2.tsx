import image from "../assets/images/perf.webp"

function Hero2 () {
    return (
        <div className="w-full h-screen relative">
            <div className="absolute w-full h-full bg-black/10 bg-transparent backdrop-blur p-10 flex flex-col items-center justify-center gap-7 text-5xl text-center font-italia uppercase">
                <p> Liquid sophistication for refined women. </p>
                <p> Each note whispers elegance, each spray tells a story. </p>
                <button className="font-sans font-extrabold border-2 border-white text-white p-3 hover:bg-black hover:border-black transition-all duration-200"> SHOP NOW!</button>
            </div>
            <img src={image} className="w-full h-full object-cover"/>
        </div>
    )
}


export default Hero2
