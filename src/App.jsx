import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout";
import "./index.css";

const Home = lazy(() => import("./components/pages/home/Home"));
const Catalog = lazy(() => import("./components/pages/catalog/Catalog"));
const CardPage = lazy(() => import("./components/pages/card-page/CardPage"));
const Register = lazy(() => import("./components/pages/register/Register"));
const Login = lazy(() => import("./components/pages/login/Login"));
const Profile = lazy(() => import("./components/pages/profile/Profile"));
const Page404 = lazy(() => import("./components/pages/errors/404"));
const Contacts = lazy(() => import("./components/pages/contact/Contact"));
const Faq = lazy(() => import("./components/pages/faq/Faq"));
const News = lazy(() => import("./components/pages/news/News"));
const Oferta = lazy(() => import("./components/pages/oferta/Oferta"));
const PrivacyPolicy = lazy(() =>
  import("./components/pages/privacy-policy/PrivacyPolicy")
);
const ShoppingCart = lazy(() =>
  import("./components/pages/shopping-cart/ShoppingCart")
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
