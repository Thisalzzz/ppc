import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
    { name: "Careers", to: "/careers" },
  ];

  const handleLoginClick = () => {
    setIsOpen(false); // close menu if open
    navigate("/admin-login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md backdrop-blur-md opacity-80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-16 w-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-lg font-semibold transition duration-300 border-b-2 pb-1 ${
                  isActive
                    ? "text-white border-black"
                    : "text-gray-500 border-transparent hover:text-white hover:border-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Admin Login Button */}
          <button
            onClick={handleLoginClick}
            className="ml-4 px-5 py-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            Login
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-2 bg-white shadow-lg rounded-b-md">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium transition duration-300 border-l-4 pl-3 ${
                  isActive
                    ? "text-black border-black"
                    : "text-gray-600 border-transparent hover:text-black hover:border-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Admin Login */}
          <button
            onClick={handleLoginClick}
            className="w-full mt-2 px-4 py-2 text-center bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Admin Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
