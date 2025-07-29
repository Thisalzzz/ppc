import { useState, useEffect } from "react";
import { 
  FaMoneyBillWave, 
  FaWifi, 
  FaChair, 
  FaUserShield, 
  FaDoorOpen,
  FaChevronRight
} from "react-icons/fa";
import { 
  MdMeetingRoom, 
  MdOutlineSecurity 
} from "react-icons/md";
import { 
  BsBriefcaseFill, 
  BsPeopleFill, 
  BsBuilding 
} from "react-icons/bs";
import parking2 from "../assets/property-details/parking2.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-amber-500" size={24} />,
      title: "Most Affordable in Sri Lanka",
      description: "Competitive pricing without compromising on quality or services."
    },
    {
      icon: <BsBriefcaseFill className="text-indigo-500" size={24} />,
      title: "Flexible Hot Desks & Private Offices",
      description: "Choose from various workspace options tailored to your needs."
    },
    {
      icon: <MdMeetingRoom className="text-teal-500" size={24} />,
      title: "Spacious Meeting Rooms",
      description: "Professional meeting spaces equipped with modern technology."
    },
    {
      icon: <FaWifi className="text-blue-500" size={24} />,
      title: "Super-Fast Wi-Fi",
      description: "Enterprise-grade internet connectivity throughout the facility."
    },
    {
      icon: <FaChair className="text-emerald-500" size={24} />,
      title: "Comfortable Shared Workspaces",
      description: "Ergonomic furniture designed for productivity and comfort."
    },
    {
      icon: <FaDoorOpen className="text-purple-500" size={24} />,
      title: "24/7 Office Access",
      description: "Work whenever inspiration strikes with round-the-clock access."
    },
    {
      icon: <MdOutlineSecurity className="text-red-500" size={24} />,
      title: "High-end Security",
      description: "Advanced security systems ensuring your safety and privacy."
    },
    {
      icon: <FaUserShield className="text-cyan-500" size={24} />,
      title: "Professional Client Support",
      description: "Dedicated team ready to assist with all your workspace needs."
    },
  ];

  // For the animated counter
  const [counterValue, setCounterValue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValue(prev => (prev < 95 ? prev + 1 : prev));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-300 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
            Why We Stand Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-indigo-600">Our Space</span>?
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with modern styling */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={parking2} 
                alt="Premium Workspace" 
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl p-6 flex justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700">24/7</div>
                <div className="text-gray-600 text-sm">Accessibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700">99%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700">{counterValue}%</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-100 group"
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA section */}
            <div className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Ready to Elevate Your Work Experience?</h3>
                  <p className="opacity-90">Join our community of innovators and professionals</p>
                </div>
                <button className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Book a Tour <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;