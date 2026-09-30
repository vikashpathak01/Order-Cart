import { Route, Routes } from "react-router-dom"
import "./App.css"
// import {Home} from "./pages/Home"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import {  ProductProvider } from "./context/ProductContext"

const App = () => {
  return (
    <ProductProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />} />
         </Routes>
    </ProductProvider>
  )
}

export default App
