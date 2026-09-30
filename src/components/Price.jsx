import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';

const Price = () => {
    const {productPrice, setProductPrice,addProductId,productData} = useContext(ProductContext);
  return (
    <div>
      {
        addProductId.length > 0 ? (<div>{
           productData.reduce((acc,curr) => {
            if(addProductId.includes(curr.id)){
                acc += curr.price;
            }
             return acc;
           }, 0)
      }</div>):(<div>{0}</div>)
      }
    </div>
  )
}

export default Price