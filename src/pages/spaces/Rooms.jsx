// src/pages/Rooms.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/Navbar";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Hardcoded WhatsApp number
  const whatsappNumber = "94707845444"; // replace with your number without '+'

  useEffect(() => {
    const fetchRooms = async () => {
      const snapshot = await getDocs(collection(db, "rooms"));
      setRooms(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setIsLoading(false);
    };
    fetchRooms();
  }, []);

  const openWhatsApp = (roomName, location) => {
    const message = `Hi, I'm interested in the ${roomName} at ${location}. Can you share more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Available Spaces</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your perfect space from our curated selection of rooms
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map(room => (
              <div
                key={room.id}
                className="relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">{room.name}</h2>
                  <div className="flex items-center text-gray-200 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>{room.location}</p>
                  </div>
                  
                  {room.price && (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-green-400">${room.price}</span>
                      <span className="text-gray-300 text-sm">/month</span>
                    </div>
                  )}
                  <button
                    onClick={() => openWhatsApp(room.name, room.location)}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg rounded-full px-4 py-1 shadow-lg border border-white/30">
                  <span className="text-sm font-semibold text-white">Available</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && rooms.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">No rooms available</h3>
            <p className="mt-2 text-gray-500">Check back later for new listings.</p>
          </div>
        )}
      </div>
    </div>
  );
}