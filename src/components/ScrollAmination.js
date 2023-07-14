import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
