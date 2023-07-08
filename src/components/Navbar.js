import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home" className="motion--title">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div class="nav__logo">Universal Farms</div>
        </motion.div>
      </Link>
      <ul class="nav__links">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li class="link">
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
          <li class="link">
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
          <li class="link">
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
