import {SendIcon} from "lucide-react"

function Footer () {
    return (
        <footer className="w-full h-auto bg-blue-300 pt-16 px-10 pb-10">
            <div className="w-full h-full grid grid-cols-2 mb-7">
                <form className="text-md  border-r-2 border-gray text-xl space-y-5">
                    <p className="w-1/2">Reach out, we are here to help you find your perfect fragrance match</p>
                    <div className="relative flex items-center w-1/2">
                        <input type="text" className="w-full h-12 border-2 border-black bg-transparent p-2 placeholder:text-sm" placeholder="Enter your message"/>
                        <SendIcon className="absolute right-0 border-none p-3 text-white bg-black" size={45}/>
                    </div>
                </form>
                <div className="w-full h-full grid grid-cols-2 p-5">
                    <ul>
                        <li>Shop</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Shopping & Return</li>
                        <li>Download App</li>
                    </ul>

                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div>
            <h1 className="text-center text-9xl font-italia">ESSENCE ENCLAVE </h1>
            </div>
        </footer>
    )
}


export default Footer
