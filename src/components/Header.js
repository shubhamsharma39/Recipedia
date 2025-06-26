import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/recipedia-logo.png";
import "../CSS/header.css";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const BtnTxt = () => {
    setBtnText((prev) => (prev === "LogOut" ? "Login" : "LogOut"));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-md sticky top-0 z-50" style={{ backgroundColor: "#2A2A6C" }}>
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Recipedia Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Links */}
      <nav className={`md:flex md:items-center gap-6 ${isOpen ? "flex flex-col absolute top-20 right-4 bg-white p-4 shadow-md rounded-md" : "hidden"} md:static`}>
        <Link className="text-white hover:text-indigo-400 font-medium" to="/">Home</Link>
        <Link className="text-white hover:text-indigo-400 font-medium" to="/about">About Us</Link>
        <Link className="text-white hover:text-indigo-400 font-medium" to="/contact">Contact Us</Link>
        <Link className="text-white hover:text-indigo-400 font-medium" to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/login">
          <button onClick={BtnTxt} className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600 transition-all">
            {btnText} <span className="inline-block ml-1">🟢</span>
          </button>
        </Link>
      </nav>

      {/* Hamburger Menu */}
      <div className="md:hidden flex flex-col gap-[6px] cursor-pointer" onClick={toggleMenu}>
        <div className={`h-[3px] w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <div className={`h-[3px] w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <div className={`h-[3px] w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </div>
    </header>
  );
};

export default Header;
