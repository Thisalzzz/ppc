import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const TrustedBy = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      const snapshot = await getDocs(collection(db, "communities"));
      const data = snapshot.docs.map((doc) => doc.data().imageUrl);
      setLogos(data);
    };

    fetchLogos();
  }, []);

  return (
    <section className="py-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-1 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">
          Trusted by Communities
        </h2>
        <p className="text-gray-50 mb-10">
          Our platform is supported and trusted by leading businesses.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-black p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
