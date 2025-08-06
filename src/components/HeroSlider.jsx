import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import one from "../assets/hero/1.jpg";
import two from "../assets/properties/rajagiriya.jpg";
import three from "../assets/property-details/furnished.jpg";
import four from "../assets/luxe/meeting3.jpg";
import five from "../assets/property-details/lobby.jpg";

const images = [one, two, three, four, five];
const descriptions = [
  "Affordable luxury offices and hot desks",
  "Premium spaces with stunning views",
  "Flexible workspace for remote teams",
  "Modern interiors designed for focus",
  "Elegant client lobby and reception area"
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Navigation functions
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative min-h-screen h-[90vh] w-full overflow-hidden"
    >
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="w-full h-full transform transition-transform duration-[12000ms] ease-linear"
              style={{ 
                transform: i === index ? "scale(1.1)" : "scale(1)",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </div>
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-6 transform transition-all duration-700">
          {/* Subtle Tagline */}
          <div 
            className="inline-block px-4 py-1.5 bg-black/30 backdrop-blur-sm rounded-full border border-white/10 text-white/80 text-sm tracking-wider"
            data-aos="fade-down"
          >
            PREMIUM COWORKING SPACES
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Paradise Properties <span className="text-amber-400">Ceylon</span>
          </h1>
          
          {/* Animated Description */}
          <div className="h-16 overflow-hidden relative">
            {descriptions.map((desc, i) => (
              <p 
                key={i}
                className={`text-lg md:text-2xl text-gray-200 font-light transition-all duration-700 absolute w-full ${
                  i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {desc}
              </p>
            ))}
          </div>
          
          {/* Call to Action */}
          <div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3.5 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 font-medium flex items-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Book Now
            </button>
            
            <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-3.5 rounded-full shadow-xl transition-all flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-6">
        {/* Slide Indicator Dots */}
        <div className="flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="text-white bg-black/30 backdrop-blur-sm p-2 rounded-full border border-white/10"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Previous/Next Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-black/50 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-black/50 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
};

export default HeroSlider;