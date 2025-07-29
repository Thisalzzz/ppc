import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Images
import meetingImg from "../assets/property-details/meeting.jpg";
import meetingImg2 from "../assets/property-details/meeting2.jpg";
import furnishedImg from "../assets/property-details/furnished.jpg";
import furnished2 from "../assets/hero/1.jpg";
import lobby from "../assets/property-details/lobby.jpg";
import parking2 from "../assets/property-details/parking2.jpg";

const FeaturesHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedLetters, setAnimatedLetters] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    { title: "Dedicated Meeting Rooms", image: meetingImg },
    { title: "Unfurnished Offices", image: meetingImg2 },
    { title: "Fully Furnished Offices", image: furnishedImg },
    { title: "Private 2 seaters", image: furnished2 },
    { title: "Elegant Client Lobby", image: lobby },
    { title: "Secure Parking Space", image: parking2 },
  ];

  // Animate letters when active slide changes
  useEffect(() => {
    const activeFeature = features[activeIndex];
    if (!activeFeature) return;
    
    // Reset animation state
    setAnimatedLetters([]);
    
    // Animate letters one by one
    const letters = activeFeature.title.split('');
    const timeoutIds = [];
    
    letters.forEach((letter, index) => {
      const timeoutId = setTimeout(() => {
        setAnimatedLetters(prev => [...prev, { letter, id: `${activeIndex}-${index}` }]);
      }, index * 60); // Delay each letter by 60ms
      
      timeoutIds.push(timeoutId);
    });
    
    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, [activeIndex]);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 px-4 md:px-12" data-aos="fade-up">
      <style jsx>{`
        @keyframes letterFall {
          0% {
            opacity: 0;
            transform: translateY(-15px) rotate(-5deg);
          }
          70% {
            opacity: 1;
            transform: translateY(5px) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        
        .letter-animation {
          display: inline-block;
          opacity: 0;
          animation: letterFall 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: white;
          width: 30px;
          border-radius: 8px;
        }
        
        .image-gradient::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 10%, transparent 100%);
        }
        
        .swiper-slide {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .swiper-slide-active {
          transform: scale(1.03);
          z-index: 2;
        }
        
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Premium</span> Services
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.7 },
          }}
          className="pb-16"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl transform transition-all duration-700">
                <div className="image-gradient">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  />
                </div>

                {/* Animated title */}
                {index === activeIndex && (
                  <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                    <div className="inline-flex flex-wrap justify-center max-w-2xl mx-auto">
                      {animatedLetters.map(({ letter, id }, idx) => (
                        <span 
                          key={id}
                          className="letter-animation text-white text-2xl md:text-4xl font-medium mx-0.5"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesHome;