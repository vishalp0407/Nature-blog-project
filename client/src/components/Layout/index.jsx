import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // sirf middle content animate hoga
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="flex-grow min-h-screen bg-background"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
