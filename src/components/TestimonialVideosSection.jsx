import { useEffect, useRef, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialVideosSection = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressInterval = useRef(null);

  const fetchVideos = async () => {
    const db = getFirestore();
    const q = query(collection(db, "testimonialVideos"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => doc.data());
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0 && videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentIndex, videos]);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(error => console.warn("Play failed:", error));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    if (videoRef.current && isPlaying) {
      progressInterval.current = setInterval(() => {
        if (videoRef.current) {
          const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          setProgress(currentProgress);
        }
      }, 100);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentIndex, isPlaying]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const goToVideo = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  if (videos.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences
          </p>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                ref={videoRef}
                src={videos[currentIndex].url}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onClick={togglePlay}
              />
              
              {/* Video Controls and Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* Testimonial Info */}
                <div className="mb-4 text-white">
                  <h3 className="text-2xl font-bold">{videos[currentIndex].name}</h3>
                  <p className="text-lg text-gray-300">{videos[currentIndex].company}</p>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-700 h-1.5 rounded-full mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                    </button>
                  </div>
                  
                  <div className="text-white text-sm">
                    {currentIndex + 1} / {videos.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center space-x-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-gradient-to-r from-blue-400 to-purple-500 w-6' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideosSection;