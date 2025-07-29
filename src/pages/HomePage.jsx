import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";
import TrustedBy from "../components/TrustedBy";
import HeroSlider from "../components/HeroSlider";


import rajagiriyaImg from "../assets/properties/rajagiriya.jpg";
import luxeImg from "../assets/properties/luxe.jpg";
import FeaturesSection from "../components/FeaturesSection";
import FeaturesHome from "../components/FeaturesHome.jsx";
import TestimonialVideosSection from "../components/TestimonialVideosSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import AboutWorkClub from "../components/Welcome.jsx";


const Home = () => {
  const navigate = useNavigate();

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutWorkClub/>
      <TrustedBy />

      {/* Property Cards Section */}
<section className="px-8 py-16 bg-gradient-to-br from-gray-300 to-gray-900">
  <h2 className="text-4xl text-gray-100 font-bold text-center mb-12">Our other locations</h2>
  <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
    <div data-aos="fade-up">
      <PropertyCard
        title="Paradise Properties Ceylon"
        location="Rajagiriya"
        image={rajagiriyaImg}
        onExplore={() => navigate("/property/ceylon")}
      />
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <PropertyCard
        title="Paradise Properties Luxe"
        location="Rajagiriya"
        image={luxeImg}
        onExplore={() => navigate("/property/luxe")}
      />
    </div>
  </div>
</section>

      {/* Features Section */}
      <FeaturesSection />

      <FeaturesHome/>

      <TestimonialVideosSection />
      <WhyChooseUs />

    </div>
  );
};

export default Home;
