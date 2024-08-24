import React, { useEffect } from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./Conta & Abou/Contact";
import About from "./Conta & Abou/About";
import Subscibe from "./components/Subscibe";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/subscribed" element={<Subscibe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
