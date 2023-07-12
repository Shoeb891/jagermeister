import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import "../styles/PropertySlider.css"; // Import the custom CSS file

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

const PropertySlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = [
    "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/interior-decor-of-farmhouse-523-146.jpg",
    "https://images.unsplash.com/photo-1558030929-66237a030c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1600252016254-f3edb5f3ae95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1582850344778-ea000b0d19ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZhcm0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGZhcm0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    // Add more image URLs here
  ];

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      paginate(1);
    }, 3000); // Change the autoplay interval here (in milliseconds)

    return () => clearInterval(autoplay);
  }, [page]);

  const refresh = () => {
    setPage([page, -direction]); // Reverse the direction to create a refresh effect
  };

  return (
    <div className="example-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 }, // Duration of the fade transition
            scale: { duration: 0.5 }, // Duration of the scale transition
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
