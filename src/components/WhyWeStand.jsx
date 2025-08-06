import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/property-details/lobby2.jpg";
import img2 from "../assets/property-details/furnished.jpg";
import img3 from "../assets/property-details/unfurnished.jpg";

const WhyWeStandOut = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Set up Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col md:flex-row bg-gradient-to-r from-[#0f0135] to-gray-500">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col md:flex-row">
        <img
          src={img1}
          className={` rounded-lg w-full md:w-1/2 h-auto object-cover aspect-[3/4] shadow-lg transform hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          alt="Elegant Meeting Space"
        />
        <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
          <img
            src={img2}
            className={` rounded-lg w-full h-auto object-cover aspect-[4/3] shadow-lg transform hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-slide-in-right delay-100' : 'opacity-0'}`}
            alt="Furnished Property"
          />
          <img
            src={img3}
            className={` rounded-lg w-full h-auto object-cover aspect-[4/3] shadow-lg transform hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}
            alt="Unfurnished Property"
          />
        </div>
      </div>

{/* Text Section */}
<div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
  <h2
    className={`text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}
  >
    WHY WE STAND OUT
  </h2>

  <div className="mt-8 space-y-6">
    <p
      className={`text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-emerald-200 text-transparent bg-clip-text leading-snug ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      We are <span className="font-extrabold">Sri Lanka's first</span> to offer both <span className="italic">luxuriously furnished</span> and <span className="underline decoration-emerald-100">fully customizable unfurnished</span> spaces — built around your vision.
    </p>

    <p
      className={`text-lg md:text-xl font-medium text-emerald-100/90 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
    >
      With us, <span className="font-bold text-white">you earn more</span> from what you offer.
    </p>

    <p
      className={`text-lg md:text-xl font-medium text-emerald-100/90 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}
    >
      Enjoy <span className="italic text-white font-semibold">total control</span> over your space — because you deserve nothing less than what you truly want.
    </p>
  </div>
</div>

    </div>
  );
};

export default WhyWeStandOut;