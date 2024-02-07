import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/home/Home";
import Catalog from "./components/pages/catalog/Catalog";
import CardPage from "./components/pages/card-page/CardPage";
import TooltipInitializer from "./assets/js/script";

function App() {
  return (
    <Router>
      <NavBar />
      <TooltipInitializer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/card-page" element={<CardPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
