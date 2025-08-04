import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white tracking-wide">Paradise Properties Ceylon</h3>
            <address className="not-italic space-y-2">
              <p className="flex items-start">
                <svg className="h-5 w-5 mr-3 text-[#e6d5c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Business Avenue, Rajagiriya<br />
                Colombo, Sri Lanka
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-[#e6d5c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +94 112 345 678
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-[#e6d5c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                askparadisepropertiesceylon@gmail.com
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">Our Spaces</a></li>
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#e6d5c3] transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/profile.php?id=61565702911754" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-full hover:bg-[#e6d5c3] transition-all duration-300 group">
                  <FaFacebookF className="text-gray-400 group-hover:text-gray-900 text-xl" />
                </a>
                <a href="https://www.instagram.com/paradise.propertiesceylon/" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-full hover:bg-[#e6d5c3] transition-all duration-300 group">
                  <FaInstagram className="text-gray-400 group-hover:text-gray-900 text-xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-full hover:bg-[#e6d5c3] transition-all duration-300 group">
                  <FaLinkedinIn className="text-gray-400 group-hover:text-gray-900 text-xl" />
                </a>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-full hover:bg-[#e6d5c3] transition-all duration-300 group">
                  <FaWhatsapp className="text-gray-400 group-hover:text-gray-900 text-xl" />
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <a
              href="#"
              className="inline-flex items-center text-sm group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="mr-2">Back to Top</span>
              <svg
                className="h-4 w-4 text-gray-400 group-hover:text-[#e6d5c3] transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        <div className="text-center text-gray-500 text-sm">
          © {currentYear} Paradise Properties Ceylon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
