import image from "../assets/images/herosection.png"
import slide1 from "../assets/images/slide1.webp"
import slide2 from "../assets/images/slide3.webp"

import {useEffect, useState} from "react"

function HeroSection() {

    const [currentSlide, setCurrentSlide] = useState<number>(0)


    const slides= [
    {id: 1, content: (<div className="hero-col">
                <div className="w-full h-full p-16 flex flex-col justify-between">
                    <div>
                        <h1 className="font-italia text-8xl">FRAGRANCE BECOMES MEMORY</h1>
                        <a href="/collections" className="underline text-xl font-funnel tracking-wider font-semibold mt-4">ALL COLLECTIONS </a>
                    </div>

                    <div>
                        <p className="text-2xl">Dicover a <strong>FRAGRANCE</strong> that speaks before you do.</p>
                        <p className="text-white text-4xl">  Elegant. Bold. Unforgettable. </p>
                    </div>
                </div>

                <div className="w-full h-full">
                    <img src={image} className="object-fit w-full h-full"/>
                </div>
            </div>)},
    {id: 2, content: (
        <div className="hero">
                <img src={slide1} className="object-cover w-full h-full"/>
            </div>
    )},
    {id: 3, content: (
        <div className="hero">
                        <img src={slide2}  className="object-cover w-full h-full"/>
        </div>
    )}
    ];

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentSlide((prevIndex) => prevIndex === slides.length - 1 ? 0: prevIndex + 1);
        }, 3000);

        return ()=> {
            clearInterval(interval)
        }
    }, [])

    const goToSlide = (index: number)=> {
        setCurrentSlide(index);
    }
    return (
        <div className="relative w-full  mx-auto overflow-hidden mt-16">
            <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
            {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                {slide.content}
                </div>
            ))}
            </div>
            <div className="absolute bottom-6 left-1/2 transform-translate-x-1/2 flex space-x-3">
            {slides.map((_, idx) => (
                <button
                key={idx}
                onClick={()=> goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-125':'bg-white/60'}`}/>
            ))}
            </div>
        </div>

    );
}

export default HeroSection
