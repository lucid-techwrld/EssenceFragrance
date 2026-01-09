import React from "react"

interface CollectionProps  {
    image: string;
    label: string;
    description: string;
    aWord: string
}
const Collection: React.FC<CollectionProps> = ({image, label, description, aWord}) => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-[70%]">
                <img src={image} className="w-full h-full object-cover"/>
            </div>

            <div className="w-full h-[30%]">
            <p className="font-italia text-2xl text-center font-bold">{label}</p>
            <p className="text-serif  text-center line-clamp-2 text-sm">{description}</p>
            <div className="flex items-center justify-center"> <a href="/" className="text-center mt-2 font-bold border-b-2 border-black hover:text-black/80 hover:border-black/80">{aWord}</a> </div>
            </div>

        </div>
    )
}

export default Collection;
