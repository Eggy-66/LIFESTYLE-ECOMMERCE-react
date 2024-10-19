import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './product1.css';


const Product1 = (props) => {
  const { id } = useParams();
  const { products, addToCart, cartItems } = useContext(ShopContext);
  
  // Find the product by id
  const product = products.find(product => product.id === parseInt(id));
  
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
          <div className="add-container">
            <div className="amount-container">
              {/* Add `Remove` and `Add` buttons or icons here */}
              <span className="amount">1</span>
              {/* <Add /> */}
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
          </div>
        </div>
      </div>
      {/* Add `Newsletter` and `Footer` components here */}
    </div>
  );
};

export default Product1;