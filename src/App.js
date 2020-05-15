import React, {useState, useEffect} from 'react';
import HeroPage from './pages/heroPage';
import OrderForm from './components/orderForm';
import ProductDesc from './pages/productDesc';
import Contact from './pages/contact';
import Footer from './components/footer';
import Brake from './components/brake';

const App = () => {
  return (
    <div className="App">
      <HeroPage/>
      {
        window.innerWidth > 900 ? <OrderForm/> : <></>
      }
      <ProductDesc/>
      <Brake/>
      <Contact/>
      <Brake/>
      <Footer/>
    </div>
  );
}

export default App;
