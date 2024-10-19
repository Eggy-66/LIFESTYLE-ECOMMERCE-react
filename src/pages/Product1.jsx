
import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { useParams } from 'react-router-dom';
import './product1.css';
import { PRODUCTS } from "../data";


const Product1 = () => {
  const { id } = useParams();
  const { products, addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  
  // Find the product by id
  const product = PRODUCTS.find(product => product.id === parseInt(id));
  
  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  const { productName, price, productImage } = product;
  const cartItemCount = cartItems[id];


  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="img-container">
          <img className="image" src={productImage} alt={productName} />
        </div>
        <div className="info-container">
          <h1 className="title">{productName}</h1>
          <p className="desc">
            Introducing our exquisite Dreamcatcher: a symbol of serenity and style. Handcrafted with care, each detail exudes elegance and tradition. Embrace peaceful nights with its ancient wisdom, filtering out negativity while welcoming positive dreams. Elevate your space with this enchanting piece – a timeless blend of culture and craftsmanship.
          </p>
          <span className="price">$ {price}</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-title">Color</span>
              <div className="filter-color" style={{ backgroundColor: 'black' }}></div>
              <div className="filter-color" style={{ backgroundColor: 'darkblue' }}></div>
              <div className="filter-color" style={{ backgroundColor: 'gray' }}></div>
            </div>
            <div className="filter">
              <span className="filter-title">Size</span>
              <select className="filter-size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          
          <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => 
              updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart 
      </button>
          
        </div>
      </div>
      {/* Add `Newsletter` and `Footer` components here */}
    </div>
  );
};

export default Product1;