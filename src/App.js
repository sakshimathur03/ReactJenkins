import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import UserProvider from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          {/* ✅ Added dynamic route for category-based filtering */}
          <Route path="/products/:categoryName" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
