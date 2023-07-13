import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import "../styles/PropertySlider.css";

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

const PropertySlider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(autoplay);
  }, [page]);

  const refresh = () => {
    setPage([page, -direction]);
  };

  return (
    <div className="example-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="property--img"
          key={page}
          src={images[imageIndex]}
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
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        ›
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        ‹
      </div>
      <div className="refresh" onClick={refresh}>
        ⟳
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === imageIndex ? "active" : ""}`}
            onClick={() => setPage([index, index > page ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;
