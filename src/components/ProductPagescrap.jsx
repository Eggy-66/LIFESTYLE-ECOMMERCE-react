import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

export const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const product = products.find(product => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { productName, price, productImage } = product;
  const cartItemCount = cartItems[id] || 0; // Default to 0 if undefined

  return (
    <div className="product-page">
      <img src={productImage} alt={productName} />
      <div className="description">
        <h1>{productName}</h1>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};