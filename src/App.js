import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Service from "./components/service";
import AboutUs from "./components/aboutUs";
import PricingPage from "./components/pricingPage";
import BlogPage from "./components/blogPage";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import Header from "./components/header";
import Footer from "./components/footer";
import ServicePage from "./components/servicePage";
import LoginPage from "./components/loginPage";
import Register from "./components/register";
import Cart from "./components/cart";
import Contact from "./components/contact";
import AboutPage from "./components/aboutPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/pricingPage" element={<PricingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogPage" element={<BlogPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
