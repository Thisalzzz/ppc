import React from 'react';
import { Helmet } from "react-helmet";

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import ppc from "../assets/properties/rajagiriya.jpg";
import luxe from "../assets/properties/luxe.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
          <Helmet>
      <title>About Us | Luxe Spaces - Coworking in Sri Lanka</title>
      <meta
        name="description"
        content="Discover Luxe Spaces – Sri Lanka’s premier coworking destination. We design workspaces that foster creativity, collaboration, and community."
      />
      <meta
        name="keywords"
        content="About Luxe Spaces, coworking Sri Lanka, workspace community, flexible office, creative coworking, shared office Colombo"
      />
      <meta name="author" content="Luxe Spaces" />
      <link rel="canonical" href="https://www.yoursite.com/about" />
    </Helmet>
      <Navbar />
      
      {/* Hero Section - Enhanced with background image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={luxe} 
            alt="Workspace background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-indigo-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Elevating Workspaces Across Sri Lanka
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Where innovation meets community in beautifully designed spaces crafted for productivity and connection.
            </motion.p>
            <Link to="/contact" className="inline-block">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #7c3aed, #ec4899)"
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg shadow-indigo-300 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Book a Tour
            </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-purple-300 opacity-70 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute top-20 right-1/3 w-40 h-40 rounded-full bg-pink-300 opacity-70 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-blue-300 opacity-70 blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        ></motion.div>
      </section>

      {/* Core Values Section - Enhanced with gradients */}
      <section className="relative py-20 bg-gradient-to-tr from-indigo-50/80 to-pink-50/80 backdrop-blur-sm">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-br from-purple-200/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-gradient-to-tl from-blue-200/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design-Forward Workspaces",
                description: "Thoughtfully curated interiors that inspire creativity and productivity",
                icon: (
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                ),
                color: "from-indigo-50 to-indigo-100"
              },
              {
                title: "Seamless Service",
                description: "Exceptional support and amenities that let you focus on what matters",
                icon: (
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                ),
                color: "from-purple-50 to-purple-100"
              },
              {
                title: "Thriving Community",
                description: "Networking opportunities and collaborative events to grow your business",
                icon: (
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                ),
                color: "from-pink-50 to-pink-100"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${value.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
              >
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with gradient accents */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flexible Membership Plans",
                description: "Options that scale with your business needs",
                color: "from-purple-100 to-indigo-100",
                accent: "bg-gradient-to-r from-purple-400 to-indigo-400"
              },
              {
                title: "Curated Interiors",
                description: "Thoughtfully designed spaces that inspire creativity",
                color: "from-blue-100 to-cyan-100",
                accent: "bg-gradient-to-r from-blue-400 to-cyan-400"
              },
              {
                title: "Community Atmosphere",
                description: "Networking opportunities and collaborative events",
                color: "from-indigo-100 to-purple-100",
                accent: "bg-gradient-to-r from-indigo-400 to-purple-400"
              },
              {
                title: "Premium Amenities",
                description: "High-speed internet, meeting rooms & 24/7 access",
                color: "from-pink-100 to-rose-100",
                accent: "bg-gradient-to-r from-pink-400 to-rose-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-b ${feature.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 z-10">
                  <div className={`w-full h-full ${feature.accent}`}></div>
                </div>
                <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">0{index+1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Enhanced with actual images */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={ppc} 
                  alt="Workspace community" 
                  className="w-full h-96 object-cover transform transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={luxe} 
                    alt="Workspace event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Our Thriving Community
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                At the heart of our coworking spaces is a vibrant, supportive community of entrepreneurs, freelancers, and innovators. We foster connections through regular networking events, workshops, and social gatherings.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Our spaces are designed to encourage collaboration and spontaneous interactions, helping you grow both personally and professionally in Sri Lanka's dynamic business ecosystem.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div 
                      key={item}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: item * 0.1 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 border-2 border-white shadow-md"
                    ></motion.div>
                  ))}
                </div>
                <div className="text-gray-700">
                  <span className="font-bold text-indigo-600">500+</span> members connecting daily
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - More vibrant gradient */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
              <div className="absolute top-1/4 -left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Premium Coworking</h2>
              <p className="text-indigo-100 mb-8 text-xl">
                Join Sri Lanka's most innovative workspace community today
              </p>
              <Link to="/contact" className="inline-block">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#4f46e5"
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-white text-indigo-600 hover:text-indigo-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
              >
                Book a Tour
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;