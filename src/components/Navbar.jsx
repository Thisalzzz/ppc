import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoDropped, setLogoDropped] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact Us", to: "/contact" },
    { name: "Careers", to: "/careers" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLogoDropped(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    setIsOpen(false);
    navigate("/admin-login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with drop animation */}
        <div
          className={`flex-shrink-0 cursor-pointer transform transition-all duration-700 ease-out ${
            logoDropped ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          } hover:scale-115`}
          onClick={() => navigate("/")}
        >
          <div className="relative">
            <img src={logo} alt="Logo" className="h-16 w-auto drop-shadow-lg" />
            <div className="absolute inset-0 rounded-md bg-blue-500 mix-blend-screen opacity-10 animate-pulse"></div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative text-lg font-medium transition-all duration-300 py-2 px-1 ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-transform duration-300 transform origin-left scale-x-0 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          {/* Admin Login Button */}
          <button
            onClick={handleLoginClick}
            className="ml-4 px-6 py-2.5 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-all duration-300 hover:from-blue-700 hover:to-teal-600 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Login
            <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-1 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group block text-lg font-medium transition-all duration-300 py-3 px-4 rounded-lg ${
                  isActive
                    ? "text-white bg-gray-800 bg-opacity-50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800 hover:bg-opacity-30"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`block w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mt-1 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          {/* Mobile Login Button */}
          <button
            onClick={handleLoginClick}
            className="w-full mt-3 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-all duration-300 hover:from-blue-700 hover:to-teal-600 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Admin Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
