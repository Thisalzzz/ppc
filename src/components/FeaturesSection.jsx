import React, { useEffect } from "react";
import { 
  FaUserTie, FaUsers, FaChair, FaParking, 
  FaUtensils, FaWifi, FaDoorClosed, FaHandsHelping, 
  FaClock, FaShieldAlt, FaBriefcase 
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const features = [
    { icon: <FaUserTie size={30} />, title: "Private Offices", color: "from-yellow-400 to-yellow-600" },
    { icon: <FaUsers size={30} />, title: "Shared Workspace", color: "from-blue-400 to-blue-600" },
    { icon: <FaChair size={30} />, title: "Hot Desks", color: "from-green-400 to-green-600" },
    { icon: <FaParking size={30} />, title: "Dedicated Parking", color: "from-purple-400 to-purple-600" },
    { icon: <FaUtensils size={30} />, title: "Fully Equiped Pantry Area", color: "from-red-400 to-red-600" },
    { icon: <FaWifi size={30} />, title: "High Speed Wi-Fi", color: "from-indigo-400 to-indigo-600" },
    { icon: <FaBriefcase size={30} />, title: "Complementary Meeting Room", color: "from-teal-400 to-teal-600" },
    { icon: <FaHandsHelping size={30} />, title: "Lobby for Clients", color: "from-orange-400 to-orange-600" },
    { icon: <FaShieldAlt size={30} />, title: "Security (CCTV & Finger print)", color: "from-cyan-400 to-cyan-600" },
    { icon: <FaClock size={30} />, title: "24/7 Access to Office", color: "from-lime-400 to-lime-600" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            We Care About You
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            These premium features are designed with your productivity and comfort in mind
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="group h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-yellow-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col items-center">
                  <div className={`mb-4 p-4 rounded-full bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <div className="w-8 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full opacity-70 mt-1"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 max-w-3xl mx-auto"
        >
          <p className="text-gray-300 text-lg">
            <span className="text-yellow-400 font-medium">All features included</span> in every membership plan. 
            Experience premium workspace solutions designed for modern professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;