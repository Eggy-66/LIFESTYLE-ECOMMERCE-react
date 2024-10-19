
//yarn add react-router-dom

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Product1 from './pages/Product1';

import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from './components/Navbar'; 
import Announcement from './components/Announcement';
import { ShopContextProvider } from './context/shop-context';


const App = () => {

  return (
    <ShopContextProvider>
    <Router>
      
      <Navbar /> 
      <Announcement/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  );
};

export default App


