import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
