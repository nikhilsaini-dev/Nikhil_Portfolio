import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  


  return (

    <div>
    <Navbar />
    

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/experience" element={<Work />}/>
        <Route path="/contact"element={<Contact />} />


      </Routes>

      <Footer />

     
    </div>
  );
};

export default App;

