import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Cards from "../components/Cards";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
 const{productData}  = useContext(ProductContext);


  return (
    <div className="products">
      <div className="products-Data">
                
        {productData.map((items) => {
          return (
            <div key={items.id} className="product-Data-Container">
                     <Cards  items={items}/>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
