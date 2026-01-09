import {SearchIcon} from "lucide-react"

function Search() {
    return (
        <form className="h-8 relative flex items-center justify-center">
            <input type="search" placeholder="Search product and categories. eg:SunBlizz" className="w-full h-full  outline-none px-7 py-2  placeholder:text-sm truncate focus:border-blue-200 focus:border-2 rounded-md"/>
            <SearchIcon className="left-2 absolute" size={15}/>
        </form>
    )
}


export default Search;
