import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MenuItem = ({ label, url }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Link
      to={url}
      className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-accent group"
    >
      <motion.span whileHover={{ y: -2 }} className="block">
        {item.label}
      </motion.span>
      {location.pathname === url && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/30 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{
          scaleX: location.pathname !== item.path ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
};

export default MenuItem;
