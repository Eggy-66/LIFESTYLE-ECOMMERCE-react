// Product.js
import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0; // Default to 0 if undefined

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={productImage} alt={productName} />
      </Link>
      
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
