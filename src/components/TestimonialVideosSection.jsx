import { useEffect, useRef, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialVideosSection = () => {
  const [videos, setVideos] = useState([]);
  const [isMuted, setIsMuted] = useState([]);
  const [isPlaying, setIsPlaying] = useState([]);
  const [progress, setProgress] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState([]);
  const videoRefs = useRef([]);
  const progressIntervals = useRef([]);

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
    if (videos.length > 0) {
      setIsMuted(Array(videos.length).fill(true));
      setIsPlaying(Array(videos.length).fill(true));
      setProgress(Array(videos.length).fill(0));
      setHoveredVideo(Array(videos.length).fill(false));
      videoRefs.current = videoRefs.current.slice(0, videos.length);
    }
  }, [videos]);

  useEffect(() => {
    videos.forEach((_, index) => {
      if (videoRefs.current[index]) {
        const playPromise = videoRefs.current[index].play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          });
        }
      }
    });
  }, [videos]);

  const toggleMute = (index) => {
    setIsMuted(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const togglePlay = (index) => {
    setIsPlaying(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      if (videoRefs.current[index]) {
        if (newState[index]) {
          videoRefs.current[index].play();
        } else {
          videoRefs.current[index].pause();
        }
      }
      return newState;
    });
  };

  const startProgressTracking = (index) => {
    if (progressIntervals.current[index]) {
      clearInterval(progressIntervals.current[index]);
    }

    progressIntervals.current[index] = setInterval(() => {
      if (videoRefs.current[index]) {
        const currentProgress = (videoRefs.current[index].currentTime / videoRefs.current[index].duration) * 100;
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[index] = currentProgress;
          return newProgress;
        });
      }
    }, 100);
  };

  const stopProgressTracking = (index) => {
    if (progressIntervals.current[index]) {
      clearInterval(progressIntervals.current[index]);
    }
  };

  if (videos.length === 0) {
    return (
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Loading client experiences...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-800 rounded-xl w-full max-w-4xl h-64" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Hear what our clients have to say about their experiences
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {videos.map((video, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                {/* Video Container */}
                <div
                  className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                  onMouseEnter={() => setHoveredVideo(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  })}
                  onMouseLeave={() => setHoveredVideo(prev => {
                    const newState = [...prev];
                    newState[index] = false;
                    return newState;
                  })}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={video.url}
                    autoPlay
                    loop
                    muted={isMuted[index]}
                    playsInline
                    className="w-full h-full object-cover"
                    onClick={() => togglePlay(index)}
                    onPlay={() => startProgressTracking(index)}
                    onPause={() => stopProgressTracking(index)}
                  />

                  <AnimatePresence>
                    {hoveredVideo[index] && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
                      >
                        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-4">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
                            style={{ width: `${progress[index] || 0}%` }}
                          ></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => togglePlay(index)}
                              className="text-white hover:text-blue-400 transition-colors"
                            >
                              {isPlaying[index] ? (
                                <FaPause size={20} />
                              ) : (
                                <FaPlay size={20} />
                              )}
                            </button>
                            <button
                              onClick={() => toggleMute(index)}
                              className="text-white hover:text-blue-400 transition-colors"
                            >
                              {isMuted[index] ? (
                                <FaVolumeMute size={20} />
                              ) : (
                                <FaVolumeUp size={20} />
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Text Content */}
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                >
                  <div className="glass-panel p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/50">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                        {video.name?.charAt(0) || ''}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-white">{video.name}</h3>
                        <p className="text-gray-300">{video.company}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <svg
                        className="absolute -left-8 -top-4 text-blue-500 opacity-30"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-xl text-gray-200 italic pl-8">
                        {video.description || video.quote || "Client testimonial"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideosSection;
