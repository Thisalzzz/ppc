import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const PromotionModal = () => {
  const [show, setShow] = useState(false);
  const [promo, setPromo] = useState(null);
  const [hasShownOnScroll, setHasShownOnScroll] = useState(false);

  const fetchPromo = async () => {
    const docRef = doc(db, 'promotions', 'current');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data().active) {
      setPromo(docSnap.data());
      return true;
    }
    return false;
  };

  useEffect(() => {
    const checkInitialModal = async () => {
      const shown = localStorage.getItem('promoShown');
      if (!shown) {
        const shouldShow = await fetchPromo();
        if (shouldShow) {
          setShow(true);
          localStorage.setItem('promoShown', 'true');
        }
      }
    };

    checkInitialModal();

    const handleScroll = async () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;

      const halfwayScrolled = scrollTop > (docHeight - windowHeight) / 2;

      if (halfwayScrolled && !hasShownOnScroll && !show) {
        const shouldShow = await fetchPromo();
        if (shouldShow) {
          setShow(true);
          setHasShownOnScroll(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownOnScroll, show]);

  return (
    <AnimatePresence>
      {show && promo && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-pink-500 mix-blend-soft-light"></div>
              <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-indigo-500 mix-blend-soft-light"></div>
              <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-purple-500 mix-blend-soft-light"></div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setShow(false)}
              aria-label="Close promotion"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Ribbon */}
            <div className="absolute top left-5 z-40 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-1 px-6 rounded-full shadow-lg">
              Limited Time!
            </div>

            <div className="relative z-10 flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 flex items-center justify-center p-6">
                <motion.div
                  className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={promo.imageUrl}
                    alt="Promotion"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-yellow-300 tracking-wide">SPECIAL OFFER</h3>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{promo.title}</h2>
                  <p className="text-lg mb-6 opacity-90 leading-relaxed">{promo.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Exclusive Deal</div>
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Limited Quantity</div>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/contact" className="flex-1">
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Claim Offer
                      </motion.button>
                    </Link>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-sm opacity-80">
                    <p>Offer expires in <span className="font-bold">few days</span>. Terms and conditions apply.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Countdown Bar */}
            <div className="border-t border-white/10">
              <div className="flex justify-between items-center px-8 py-4 text-white/80 text-sm">
                <div>Hurry up! This offer won't last long</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromotionModal;
