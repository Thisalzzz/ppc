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

  return (
    <section className="bg-black py-20 px-4 md:px-12" data-aos="fade-up">
      {/* Custom animation style */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .text-overlay {
          background: rgba(0, 0, 0, 0.6);
          padding: 12px 20px;
          border-radius: 12px;
          text-shadow: 1px 1px 8px rgba(0,0,0,0.9);
        }
      `}</style>

      <h2 className="text-4xl text-white font-mono text-center mb-12">
        Our Main Services
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: { slidesPerView: 1.4 },
          1024: { slidesPerView: 1.6 },
        }}
        className="pb-10"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-[1.02]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Title with background only on active slide */}
              {index === activeIndex && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center fade-in-up">
                  <p className="text-white text-xl md:text-3xl font-semibold text-overlay">
                    {feature.title}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturesHome;
