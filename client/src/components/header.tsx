import {MenuIcon, ShoppingBag, User} from "lucide-react"
import Search from "./search"

function Header() {
    return (
        <div className="header">
            <div className="flex gap-5 items-center ">
                <MenuIcon/>
                <Search/>
            </div>

            <p className="font-serif text-4xl text-center"> Essence Enclave </p>
            <div className="flex items-center gap-5 justify-self-end">
                <ShoppingBag size={20}/>
                <User size={20}/>
            </div>
        </div>
    )
}

export default Header
