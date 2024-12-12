import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Women from "./pages/products pages/Women";
import Men from "./pages/products pages/Men";
import Kids from "./pages/products pages/Kids";
import Nav from "./components/HomeSection/navBar/Nav";
import Footer from "./components/HomeSection/footer/Footer";
import Login from "./pages/LoginSignup/Login";
import BottomBanner from "./components/HomeSection/header/BottomBanner";
import SignUp from "./pages/LoginSignup/SignUp";
import Cart from "./pages/cart/Cart";
import SingleProductPage from "./pages/products pages/SingleProduct";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clearance" element={<div>Clearance Page</div>} />
        <Route path="/new" element={<div>New Arrivals</div>} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shoes" element={<div>Shoes Collection</div>} />
        <Route
          path="/bags-accessories"
          element={<div>Bags & Accessories</div>}
        />
        <Route path="/home" element={<div>Home Decor</div>} />
        <Route path="/beauty" element={<div>Beauty Products</div>} />
        <Route path="/gift-guide" element={<div>Gift Guide</div>} />
        <Route path="/flash-events" element={<div>Flash Events</div>} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <BottomBanner />
      <Footer />
    </>
  );
}

export default App;
