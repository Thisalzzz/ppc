import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import FeaturesSection from "../../components/FeaturesSection";
import Footer from "../../components/Footer";

// Image imports
import victorianImg from "../../assets/property-details/lobby2.jpg";
import parkingImg from "../../assets/luxe/parking.jpg";
import amenitiesImg from "../../assets/property-details/amenities.jpg";
import meetingImg from "../../assets/luxe/meeting3.jpg";
import aristocraticImg from "../../assets/luxe/lobby2.jpg";
import unfurnishedImg from "../../assets/luxe/unfurnished.jpg";
import luxe from "../../assets/properties/luxe.jpg";
import lobby3 from "../../assets/luxe/lobby3.jpg";
import seater2 from "../../assets/luxe/2seater.jpg";

const PropertyDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ 
      duration: 800,
      once: true
    });

    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const images = [
    { src: victorianImg, alt: "Victorian Common Spaces" },
    { src: parkingImg, alt: "Ample Parking with Security" },
    { src: meetingImg, alt: "Complimentary Meeting Spaces" },
    { src: aristocraticImg, alt: "Tranquil Aristocratic Theme" },
    { src: unfurnishedImg, alt: "Furnished and Unfurnished Options" },
     { src: lobby3, alt: "Elegant lobby for your clients and visitors" },
     { src: seater2, alt: "Cozy 2 seater cabins" },
  ];

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const highlightCards = [
    { 
      img: meetingImg, 
      tag: "MEETING SPACES", 
      title: "Executive Meeting Rooms", 
      desc: "Private, soundproof rooms for calls & presentations" 
    },
    { 
      img: unfurnishedImg, 
      tag: "OFFICE SUITES", 
      title: "Customizable Ofices", 
      desc: "Fully customizable offices for you to customize on your own way" 
    },
    { 
      img: lobby3, 
      tag: "RECEPTION", 
      title: "Client Lobby", 
      desc: "Elegant Victorian-style reception to impress visitors" 
    },
    { 
      img: amenitiesImg, 
      tag: "AMENITIES", 
      title: "Premium Facilities", 
      desc: "High-end amenities for productivity and comfort" 
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#0a0a0a] font-inter text-gray-200">
      <Navbar />

      {/* Hero */}
      <div 
        className="w-full h-[85vh] bg-center bg-cover relative flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${luxe})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-1" />
        
        <div className="relative z-10 text-center max-w-4xl px-6 py-12 backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-playfair text-white font-bold leading-tight tracking-tight">
            Paradise Properties Luxe
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-6 rounded-full" />
          <p className="text-gray-300 mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Luxury commercial spaces in the heart of Colombo's business district
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3.5 text-lg rounded-full shadow-xl transition-all transform hover:-translate-y-0.5">
              Schedule Tour
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Link to="info-cards" smooth={true} duration={800}>
            <div className="w-10 h-16 rounded-full border-2 border-white/40 flex justify-center p-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </Link>
        </div>
      </div>

      {/* Info Cards */}
      <section 
        id="info-cards" 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 -translate-y-12"
        data-aos="fade-up"
      >
        {[
          {
            title: "Hours",
            icon: "⏰",
            lines: ["24/7 Access", "Staff: 8:30 AM – 5:00 PM", "Tours: 9:00 AM – 5:00 PM"],
          },
          {
            title: "Location",
            icon: "📍",
            lines: ["123 Main Street, Colombo, Sri Lanka"],
            button: { label: "View Map", link: "map", color: "blue" },
          },
          {
            title: "Gallery",
            icon: "🖼️",
            lines: ["Professional photography of our spaces"],
            button: { label: "View Gallery", link: "gallery", color: "green" },
          },
        ].map((card, i) => (
          <div 
            key={i} 
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-2xl rounded-2xl p-7 hover:border-gray-700 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-white mb-3">{card.title}</h2>
            <ul className="text-gray-400 space-y-2 text-base mb-6">
              {card.lines.map((line, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> {line}
                </li>
              ))}
            </ul>
            {card.button && (
              <Link
                to={card.button.link || card.button.id}
                smooth={true}
                duration={500}
                className={`inline-block px-5 py-2.5 text-white bg-${card.button.color}-600 hover:bg-${card.button.color}-700 rounded-lg transition-all font-medium`}
              >
                {card.button.label}
              </Link>
            )}
          </div>
        ))}
      </section>

                  {/* About Section */}
            <section className="bg-[#111111] text-white py-20 px-4 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                  {/* Text Content */}
                  <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
                      Welcome to Paradise Properties Ceylon.
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      Our workspaces across Colombo and other prime locations in Sri Lanka redefine what work can mean for entrepreneurs and growing businesses. At PPC, workspaces are elevated, service is premium, design is curated, and community is empowered. From refined coworking zones to customized event and meeting experiences — step into a new era of professional environments.
                    </p>
                    <RouterLink to="/contact" className="inline-block">
                    <button className="bg-[#e6d5c3] text-black rounded-full px-6 py-3 hover:scale-105 transition-transform">
                      Inquire
                    </button>
                    </RouterLink>
                  </div>
          
                  {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={victorianImg}
              alt="Workplace"
              className="rounded-2xl shadow-lg object-cover w-[90%] h-[300px] md:h-[400px]"
            />
          </div>
          
                </div>
            </section>
      
            {/* image on right */}
        <section className="bg-[#111111] text-white py-20 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            {/* Image on the left */}
            <div className="md:w-1/2 w-full flex justify-center order-1 md:order-none">
              <img
                src={meetingImg}
                alt="Workplace"
                className="rounded-2xl shadow-lg object-cover w-[90%] h-[300px] md:h-[400px]"
              />
            </div>
      
            {/* Text on the right */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
                Discover Elevated Workspaces Designed for Success
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                At Paradise Properties Ceylon, we craft more than just offices — we create experiences. Whether you're a startup, a growing business, or a solo entrepreneur, our thoughtfully designed spaces across Sri Lanka provide the perfect balance of comfort, creativity, and professionalism. It's more than a place to work — it's where your best ideas come to life.
              </p>
            </div>
      
          </div>
        </section>

      {/* Map Section */}
      <section id="map" className="max-w-6xl mx-auto px-4 mt-16" data-aos="fade-up">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-playfair text-white mb-2">Prime Location</h2>
            <p className="text-gray-400">Centrally located in Colombo's business district</p>
          </div>
          <button className="flex items-center text-purple-400 hover:text-purple-300 transition">
            <span>Get Directions</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-gray-800">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8665006920296!2d79.9002958!3d6.9065629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596a5c4d8f69%3A0xb6629dd71fc7d6b1!2sLuxe%20Colombo%20Head%20Office%20-%20Rajagiriya!5e0!3m2!1sen!2slk!4v1753346941494!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm">
            Colombo • 15 min from airport
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 mt-24" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair text-white mb-4">Property Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore our premium coworking spaces through professionally captured images showcasing the elegance and functionality of our property.
          </p>
        </div>
        
        <div className="relative w-full h-[500px] bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          {/* Arrows */}
          <button 
            onClick={goToPrevious} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext} 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>


          {/* Image */}
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xl font-medium">{images[currentImageIndex].alt}</div>
              </div>
              <div className="flex space-x-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex mt-8 space-x-4 overflow-x-auto py-4 scrollbar-hide">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative cursor-pointer transition-all duration-300 ${
                idx === currentImageIndex ? "ring-4 ring-purple-500 scale-105" : "opacity-70 hover:opacity-100"
              } rounded-lg overflow-hidden flex-shrink-0`}
              onClick={() => goToSlide(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-32 h-20 object-cover"
              />
              {idx === currentImageIndex && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlight */}
      <FeaturesSection />

      {/* Highlight Cards - Modern Design */}
      <section className="max-w-6xl mx-auto px-4 mt-28" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair text-white mb-4">Premium Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover the exceptional amenities that make our property stand out in Colombo's luxury market
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-black/70 hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-xl border border-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {highlightCards.map((feature, i) => (
              <div 
                key={i}
                className="relative min-w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border border-gray-800 transition-all hover:border-gray-600"
              >
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <span className="text-xs font-medium tracking-widest text-gray-300">{feature.tag}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
                
                <div className="absolute top-5 right-5">
                  <button className="bg-black/60 hover:bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-black/70 hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-xl border border-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 mt-28 mb-24 text-center" data-aos="zoom-in">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">Experience Premium Coworking</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Schedule a private tour and discover how our luxury spaces can elevate your business
          </p>
          <RouterLink to="/contact" className="inline-block mb-4">
          <button className=" cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-10 py-4 text-lg rounded-full shadow-xl transition-all transform hover:-translate-y-1 font-medium">
            Book Your Private Tour
          </button>
          </RouterLink>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PropertyDetails;