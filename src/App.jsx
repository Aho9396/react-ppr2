import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";
// import About from "./components/About";

function App() {
  return (
    <> 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/about" element={<Page/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
