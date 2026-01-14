import './App.css'
import Layout from "./pages/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import OTP from "./pages/otp"
import Products from "./pages/product"
import {Routes, Route} from "react-router"

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" >
          <Route index element={<SignUp/>}/>
          <Route path="verify_otp" element={<OTP/>}/>
        </Route>
        <Route path="/products" element={<Products/>}/>
      </Route>

    </Routes>
  )
}

export default App
