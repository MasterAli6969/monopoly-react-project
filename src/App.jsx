import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TooltipInitializer from "./assets/js/script";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/home/Home";
import Catalog from "./components/pages/catalog/Catalog";
import CardPage from "./components/pages/card-page/CardPage";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import Page404 from "./components/pages/errors/404";
import Contacts from "./components/pages/contact/Contact";
import Faq from "./components/pages/faq/Faq";
import News from "./components/pages/news/News";
import Oferta from "./components/pages/oferta/Oferta";
import PrivacyPolicy from "./components/pages/privacy-policy/PrivacyPolicy";
import ShoppingCart from "./components/pages/shopping-cart/ShoppingCart";
import { ErrorHandler } from "./services/middleware/ErrorHandler";


function App() {
  return (
    <Router>
      <ErrorHandler>
        <NavBar />
        <TooltipInitializer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/card-page" element={<CardPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/news" element={<News />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/page404" element={<Page404 />} />
        </Routes>
        <Footer />
      </ErrorHandler>
    </Router>
  );
}
export default App;
