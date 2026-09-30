import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Price from "../components/Price";
const Cart = () => {
  const { productData, addProductId,setAddProductId } = useContext(ProductContext);

  const navigate = useNavigate();
  // console.log(productData);
  // console.log(addProductId);

  const handleShopNow = () => {
    navigate("/");
  };

  const handleOrder = () => {
    prompt("order place successfully");
    set
    console.log("order successful");
    setAddProductId([]);
  }

   const handleRemoveFromCart = (id) => {

    setAddProductId(addProductId.filter((pId) => pId !== id));
  };
  return (
    <>
      <div className="cartContainer">
        {addProductId.length > 0 ? (
          <div className="cartProductContainer">
            <div className="cartProducts">
              {productData.map((product) => {
                return (
                  addProductId.includes(product.id) && (
                    <div key={product.id} className="cartitems">
                      <div className="product-title">{product.title}</div>
                      <img
                        src={product.thumbnail}
                        alt=""
                        className="cart-product-image"
                      />

                      <div className="cart-item-price">
                        <div>{product.price}</div>
                        <div className="cart-delete" onClick={()=> handleRemoveFromCart(product.id)}>delete</div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className="cart-price-container">
              <div>
                <span>Total Items : </span> <span>{addProductId.length}</span>
              </div>

              <div className="totalPrice">
                <div>Total Price : </div>{" "}
                <div>
                  {" "}
                  <Price />
                </div>
              </div>

              <div>{addProductId.length > 0 && <div className="place-order" onClick={handleOrder}>Place Order</div>}</div>
            </div>
          </div>
        ) : (
          <div className="cartEmptyContainer">
            <p className="cartEmpty">Cart Empty</p>
            <p className="shopNow" onClick={handleShopNow}>
              Shop Now
            </p>
          </div>
        )}
        {/* {productData.map((product) => {
        return (
          addProductId.includes(product.id) && (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.id}</p>
            </div>
          )
        );
      })} */}
      </div>
    </>
  );
};

export default Cart;
