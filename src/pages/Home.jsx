import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Shop } from '../components/shop'



const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Shop />
      <Newsletter/>
      <Footer/>
    </div>
  )
} 

export default Home 