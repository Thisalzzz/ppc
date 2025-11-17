import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";
import TrustedBy from "../components/TrustedBy";
import HeroSlider from "../components/HeroSlider";
import rajagiriyaImg from "../assets/property-details/victorian.jpg";
import luxeImg from "../assets/property-details/lobby2.jpg";
import coming from "../assets/properties/coming.png";
import havelock from "../assets/properties/havelock.jpeg";
import FeaturesSection from "../components/FeaturesSection";
import FeaturesHome from "../components/FeaturesHome.jsx";
import TestimonialVideosSection from "../components/TestimonialVideosSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import AboutWorkClub from "../components/Welcome.jsx";
import Footer from "../components/Footer.jsx";
import PromotionModal from "../components/PromotionalModal.jsx";
import WhyWeStandOut from "../components/WhyWeStand.jsx";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Paradise Properties - Coworking Spaces in Rajagiriya</title>
        <meta
          name="description"
          content="Discover premium coworking spaces in Colombo with Paradise Properties. Flexible, modern, and fully equipped office spaces to boost your productivity."
        />
        <meta
          name="keywords"
          content="coworking Colombo, office space, Paradise Properties, workspaces, flexible offices, shared office Sri Lanka, paradise coworking, coworking spaces, co-working spaces Sri Lanka"
        />
        <meta name="author" content="Paradise Properties Ceylon" />
        <meta property="og:title" content="Paradise Properties - Workspaces in Rajagiriya" />
        <meta property="og:description" content="Flexible coworking spaces by Paradise Properties." />
        <meta property="og:image" content="https://yourdomain.com/images/ppclogo.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <PromotionModal />
      <Navbar />
      <HeroSlider />
      <AboutWorkClub />
      <TrustedBy />

      {/* Property Cards Section */}
      <section className="px-8 py-16 bg-gradient-to-br  from-[#0f0135] to-gray-500 w-full">
        <h2 className="text-4xl text-gray-100 font-bold text-center mb-12">
          Our locations
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1" data-aos="fade-up ">
            <PropertyCard
              title="Paradise Properties Ceylon"
              location="Nawala"
              image={rajagiriyaImg}
              onExplore={() => navigate("/property/ceylon")}
            />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
            <PropertyCard
              title="Paradise Properties Luxe"
              location="Rajagiriya"
              image={luxeImg}
              onExplore={() => navigate("/property/luxe")}
            />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
            <PropertyCard title="Scheduled to open on December 10th!" image={havelock} />
          </div>
        </div>
      </section>
      <WhyWeStandOut />
      <FeaturesSection />
      <FeaturesHome />
      <TestimonialVideosSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;