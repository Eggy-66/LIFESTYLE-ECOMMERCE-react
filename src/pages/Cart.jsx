import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import React, { useState } from 'react';
import { useContext } from "react";
import { PRODUCTS } from "../data";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`

  min-height: 40vh; /* Minimum height of the container is set to 100% of the viewport height */
`;

const Cart = () => {

  const { cartItems, getTotalCartAmount, getTotalCartItems, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const totalCartItems = getTotalCartItems();
  return (
    <Container>

    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopTexts>
        <TopText>Shopping Bag({totalCartItems})</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        
      </Top>
      
      <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
     <Bottom> <h1> Your Shopping Cart is Empty</h1></Bottom>
      )}
    </div>

    </Wrapper>
   
    <Footer />
 
  </Container>
  
);
};

export default Cart;