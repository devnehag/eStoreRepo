import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import './App.css';
import LandingPage from './Components';
import ProductDetails from './Components/Product/productDetails';
import Cart from './Components/Cart';
import PaymentResponse from "./Components/Cart/paymentResponse";
import Login from './Components/Login';

function App() {
  return (
    <>


      <Routes>
        <Route path="/estore" element={<LandingPage/>} />
        {/* <Route exact path="/productdetails" component={ProductDetails} />
          <Route exact path="/viewcart" component={Cart}/>
          <Route exact path="/paymentresponse" component={PaymentResponse}/> */}
        <Route exact path="/" element={<Login/>} />
      </Routes>

    </>
  );
}

export default App;
