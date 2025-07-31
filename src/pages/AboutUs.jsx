import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Elevating Workspaces <span className="text-indigo-600">Across Sri Lanka</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Where innovation meets community in beautifully designed spaces crafted for productivity and connection.
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Book a Tour
            </motion.button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-purple-200 opacity-70 blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-40 h-40 rounded-full bg-indigo-200 opacity-70 blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-blue-200 opacity-70 blur-3xl"></div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white bg-opacity-60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design-Forward Workspaces",
                description: "Thoughtfully curated interiors that inspire creativity and productivity",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Seamless Service",
                description: "Exceptional support and amenities that let you focus on what matters",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: "Thriving Community",
                description: "Networking opportunities and collaborative events to grow your business",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flexible Membership Plans",
                description: "Options that scale with your business needs",
                color: "bg-purple-100"
              },
              {
                title: "Curated Interiors",
                description: "Thoughtfully designed spaces that inspire creativity",
                color: "bg-blue-100"
              },
              {
                title: "Community Atmosphere",
                description: "Networking opportunities and collaborative events",
                color: "bg-indigo-100"
              },
              {
                title: "Premium Amenities",
                description: "High-speed internet, meeting rooms & 24/7 access",
                color: "bg-pink-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.color} p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-5xl font-bold text-gray-800 mb-4">0{index+1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-lg"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Thriving Community</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At the heart of our coworking spaces is a vibrant, supportive community of entrepreneurs, freelancers, and innovators. We foster connections through regular networking events, workshops, and social gatherings.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our spaces are designed to encourage collaboration and spontaneous interactions, helping you grow both personally and professionally in Sri Lanka's dynamic business ecosystem.
              </p>
              
              <div className="flex space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-bold">500+</span> members connecting daily
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Premium Coworking</h2>
            <p className="text-indigo-100 mb-8 text-xl">
              Join Sri Lanka's most innovative workspace community today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              Book a Tour
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-2">Workspace Sri Lanka</div>
          <p className="mb-6">Elevating workspaces across the island</p>
          <div className="flex justify-center space-x-6 mb-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  {social.charAt(0).toUpperCase()}
                </div>
              </a>
            ))}
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Workspace Sri Lanka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;