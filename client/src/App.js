import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Headphones from './Headphones';
import Speakers from './Speakers';
import Earphones from './Earphones';
import ProductDetail from "./ProductDetail";

//Router
import { 
  Routes,
  Route } from "react-router-dom";

import './App.css';

function App() {
  const [ jsonData, setJsonData ] = useState([]);


  useEffect(() => {
    fetch('/headphone-data')
      .then(res => res.json())
      .then(data => setJsonData(data))
  }, [])
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home jsonData={jsonData} />} />
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
