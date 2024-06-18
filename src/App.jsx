import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './assets/Slickslider.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <>
      <BrowserRouter >
          <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="products/:productHandle" element={<ProductPage />} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
