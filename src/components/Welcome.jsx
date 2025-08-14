import React from 'react';
import { useNavigate } from "react-router-dom";
import furnished from "../assets/property-details/furnished.jpg";

const AboutWorkClub = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#02001a] text-white py-20 px-4 md:px-16">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        data-aos="fade-up"
      >
        {/* Text Content */}
        <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
            Welcome to Paradise Properties Ceylon.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Our workspaces across Colombo and other prime locations in Sri Lanka redefine what work can mean for entrepreneurs and growing businesses. At PPC, workspaces are elevated, service is premium, design is curated, and community is empowered. From refined coworking zones to customized event and meeting experiences — step into a new era of professional environments.
          </p>
          <button className="bg-[#e6d5c3] text-black rounded-full px-6 py-3 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Inquire
          </button>
        </div>

        {/* Image */}
        <div
          className="md:w-1/2 w-full flex justify-center"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src={furnished}
            alt="Workplace"
            className="rounded-2xl shadow-lg object-cover w-[90%] h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutWorkClub;
