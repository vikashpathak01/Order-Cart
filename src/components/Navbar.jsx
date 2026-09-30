import { Menu, ShoppingCartPlus, X } from "lucide-react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const {addProductId} = useContext(ProductContext);
  const handleHam = () => {
    setActive(!active);
  };

  return (
    <div className="navbar-container">
      <div className="container navbar-content">
        <div className="navbar-logo">
          <h3>
            <span>O</span>rder<span>C</span>
            art
          </h3>
        </div>
        <div className="navbar-link">
          <Link to="/" className="navbar-home">
            Home
          </Link>
          <Link to="/cart" className="navbar-cart">
            <ShoppingCartPlus className="cart"  /> <sup className="cartItems">{addProductId.length}</sup>
          </Link>
        </div>
        <div onClick={handleHam} className={`${active ? "active" : ""} mobile`}>
          <Menu />
        </div>
      </div> 

      <div className={`navbar-mobile ${active ? "active" : ""} `}>
       <div className="width-full">
         <div onClick={handleHam}  className="navbar-x-container">
          <X className="navbar-x"/>
        </div>
       </div>
        <div className="nav-link-container">
          <div >
          
            <Link to="/" className="navbar-home">
              Home
            </Link>
          </div>
          <div >
            <Link to="/cart" className="navbar-cart">
              <ShoppingCartPlus className="cart" /> <sup className="cartItems">{addProductId.length}</sup>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
