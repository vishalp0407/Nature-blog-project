import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* User Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)} // ✅ Click toggle
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full
                   bg-gradient-to-r from-accent to-accent/80
                   hover:from-accent/90 hover:to-accent
                   text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.1 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-card border border-border
                       rounded-lg shadow-lg"
          >
            <div className="py-2">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
