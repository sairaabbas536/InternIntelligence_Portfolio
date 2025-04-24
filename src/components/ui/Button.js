import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
