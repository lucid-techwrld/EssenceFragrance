import Header from "../components/header"
import {Outlet} from "react-router"
import Footer from "../components/footer"

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
