import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,Routes} from "react-router-dom";


import Home from "./React_component/Home";
import Services from './React_component/Services';
import PageNotFind from './React_component/PageNotFind';
import About from "./React_component/About";
import Contact from "./React_component/Contact";
import Navbar from "./React_component/Navbar";
import Footer from "./React_component/Footer";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFind/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App