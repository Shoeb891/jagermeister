import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link to="/home" className="motion--title">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div class="nav__logo">A Creations Farm Stay</div>
        </motion.div>
      </Link>
      <div
        className={`nav__menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="nav__icon-line"></span>
        <span className="nav__icon-line"></span>
        <span className="nav__icon-line"></span>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/home">Home</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/about">About</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/gallery">Gallery</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/contact">Contact Us</CustomLink>
          </li>
        </motion.div>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActiveLink = useMatch(resolvedPath.pathname, { exact: true });

  return (
    <li className={isActiveLink ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;