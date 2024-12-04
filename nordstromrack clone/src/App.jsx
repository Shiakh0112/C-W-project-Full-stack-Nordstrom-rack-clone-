import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Women from "./pages/products pages/Women";
import Men from "./pages/products pages/Men";
import Kids from "./pages/products pages/Kids";
import Nav from "./components/HomeSection/navBar/Nav";

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
      </Routes>
    </>
  );
}

export default App;
