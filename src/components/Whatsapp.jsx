import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '94707845444'; // Replace with your number
  const message = 'Hello! Thank you for reaching out. We\'ll get back to you soon!';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full py-3 px-5 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 group"
      title="Chat with us on WhatsApp"
    >
      {/* Animated ring effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></div>
      
      {/* WhatsApp icon */}
      <FaWhatsapp 
        className="text-white drop-shadow-md relative z-10 mr-2" 
        size={28} 
      />
      
      {/* Always visible text */}
      <span className="font-bold text-md tracking-wide relative z-10">
        WhatsApp Us
      </span>
      
      {/* Floating notification dot */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
    </div>
  );
};

export default WhatsAppButton;