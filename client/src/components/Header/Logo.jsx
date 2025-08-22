import { Leaf } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="text-2xl font-black text-primary"
      >
        🌿 NatureBlog
      </motion.div>
    </Link>
  );
};

export default Logo;
