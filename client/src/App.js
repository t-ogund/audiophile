import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Headphones from './Headphones';
import Speakers from './Speakers';
import Earphones from './Earphones';
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";
import Navigation from "./Navigation";

//Router
import { 
  Routes,
  Route } from "react-router-dom";

import './App.css';

function App() {
  const [ jsonData, setJsonData ] = useState([]);
  const [ cartArray, setCartArray ] = useState([]);

  


  useEffect(() => {
    fetch('/headphone-data')
      .then(res => res.json())
      .then(data => setJsonData(data))
  }, [])

  function passDataToApp(x) {
    setCartArray(x)
  }
 
  return (
    <>
      {/* <Home /> */}
      <Navigation passDataToAppProp={passDataToApp} />
      <Routes>
        <Route path="/" element={<Home jsonData={jsonData} />} />
        <Route path="/checkout" element={<Checkout jsonData={jsonData} cart={cartArray} />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones/:id" element={<ProductDetail jsonData={jsonData} />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:id" element={<ProductDetail jsonData={jsonData} />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/:id" element={<ProductDetail jsonData={jsonData} />} />
      </Routes>
    </>   
  );
}

export default App;
