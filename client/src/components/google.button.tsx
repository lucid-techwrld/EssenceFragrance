import image from "../assets/images/google.png"

function GoogleButton() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center w-full h-auto">
        <p>______________________ or ______________________ </p>
                    <button type="button" className="w-auto px-4 py-2 h-12 rounded-full border-2 border-black flex justify-center items-center gap-2 hover:bg-black hover:text-white"><img src={image} className="w-9 h-9"/> <p>Continue with Google</p></button>
                </div>
    )
}

export default GoogleButton
