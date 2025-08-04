// components/FloatingInstagramButton.jsx
import { FaInstagram } from "react-icons/fa";

const FloatingInstagramButton = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/paradise.propertiesceylon/", // Replace with your IG username
      "InstagramPopup",
      "width=500,height=600,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-24 right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50 cursor-pointer"
      aria-label="Instagram"
    >
      <FaInstagram size={24} />
    </button>
  );
};

export default FloatingInstagramButton;
