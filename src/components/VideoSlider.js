import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "../styles/VideoSlider.css";

const variants = {
  enter: (direction) => {
    return {
      opacity: 0,
      scale: direction > 0 ? 0.8 : 1.2,
    };
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      opacity: 0,
      scale: direction < 0 ? 0.8 : 1.2,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const VideoSlider = ({ videos }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const videoRef = useRef(null);

  const videoIndex = wrap(0, videos.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      paginate(1);
    }, 10000); // 10 secs

    const handleFullscreen = () => {
      const videoElement = videoRef.current;

      if (videoElement) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      }
    };

    const videoPlayer = videoRef.current;
    if (videoPlayer) {
      videoPlayer.addEventListener("click", handleFullscreen);
    }

    return () => {
      clearInterval(autoplay);
      if (videoPlayer) {
        videoPlayer.removeEventListener("click", handleFullscreen);
      }
    };
  }, [page]);

  return (
    <div className="video-slider-container">
      <div className="fullscreen">
        <AnimatePresence initial={false} custom={direction}>
          <div className="video-container">
            <motion.video
              ref={videoRef}
              className="video-slide"
              key={page}
              src={videos[videoIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              loop
              muted
              autoPlay
            />
          </div>
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          ›
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          ‹
        </div>
        <div className="refresh" onClick={() => setPage([page, -direction])}>
          ⟳
        </div>
        <div className="dots">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === videoIndex ? "active" : ""}`}
              onClick={() => setPage([index, index > page ? 1 : -1])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
