import { useContext, useState } from "react";
import "./Cards.css";
import { ProductContext } from "../context/ProductContext";

const Cards = ({ items }) => {
  const [clicked, setClicked] = useState(false);
  const { addProductId, setAddProductId, productData } = useContext(ProductContext);

 
  const handleAddToCart = (id) => {
    // isButtonClicked();
    setAddProductId([...addProductId, id]);
  
  };
  const handleRemoveFromCart = (id) => {
    // isButtonClicked();
    //  setAddProductId(addProductId.filter(items => items !== id));

    setAddProductId(addProductId.filter((pId) => pId !== id));
  };

  const isButtonClicked = () => {
    setClicked(!clicked);
  };
  // console.log("items",items)
  return (
    <>
      <div className="product-title"> {items.title.slice(0, 30) + "..."}</div>
      <p className="product-description">
        {items.description.slice(0, 70) + "..."}
      </p>
      <img src={items.thumbnail} alt="" className="product-image" />
      <div className="button-container">
        <div className="product-price">{items.price}</div>
        {addProductId.includes(items.id) ? (
          <button onClick={() => handleRemoveFromCart(items.id)} className="product-Remove">
            Remove Item
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(items.id)}
            className="product-Add"
          >
            Add To CART
          </button>
        )}

        {/* {clicked ? (
          <button onClick={handleRemoveFromCart} className="product-Remove">
            Remove Item
          </button>
        ) : (
          <button   onClick={ () => handleAddToCart(items.id)}  className="product-Add">
            Add To CART
          </button>
        )} */}
      </div>
    </>
  );
};

export default Cards;
