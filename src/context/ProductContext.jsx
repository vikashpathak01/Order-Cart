import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [addProductId, setAddProductId] = useState([]);
  let [productPrice, setProductPrice] = useState(0);
   const [loading, setloading] = useState(false);
  const getProductDetails = async () => {
    setloading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductData(data.products);
      //   console.log(data.products);
      //   console.log(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setloading(false);
    }
  };
  // console.log(addProductId);

  useEffect(() => {
    getProductDetails();
  }, []);
  //   console.log(addproductIds);
  return (
    <ProductContext.Provider
      value={{
        productData,
        setAddProductId,
        addProductId,
        productPrice,
        setProductPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
