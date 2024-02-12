import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/home/Home";
import Catalog from "./components/pages/catalog/Catalog";
import CardPage from "./components/pages/card-page/CardPage";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import TooltipInitializer from "./assets/js/script";

function App() {
  return (
    <Router>
      <NavBar />
      <TooltipInitializer />
      <Routes>
        <Route path="/monopoly-react-project" element={<Home />} />
        <Route path="/monopoly-react-project/catalog" element={<Catalog />} />
        <Route path="/catalog/card-page" element={<CardPage />} />
        <Route path="/monopoly-react-project/register" element={<Register />} />
        <Route path="/monopoly-react-project/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
