import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';

import headphones from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphones,
  title2: "Air Solo Bass",
  title3: "Winter Sale", 
  title4: 
    "Lorem ipsun, dolor sit amet consecteru adipsicing elit",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Bass",
  title3: "Winter Sale", 
  title4: 
    "Lorem ipsun, dolor sit amet consecteru adipsicing elit",
  bgColor: "#2dcc6f",
};

const App = () => {
  return (
  <div className='
  bg-white 
  dark:bg-gray-900 
  dark:text-white
  duration-200 overflow-hidden
  '>
    <Navbar />
    <Hero />
    <Category />
    <Category2 />
    <Services />
    <Banner data={BannerData}/>
    <Products />
    <Banner data={BannerData2}/>
  </div>
  );
};

export default App;