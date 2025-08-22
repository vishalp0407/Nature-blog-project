import { motion } from "framer-motion";

const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <motion.button
      onClick={() => setIsSearchOpen(!isSearchOpen)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent/20 transition-colors"
      aria-label="Search"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </motion.button>
  );
};

export default SearchBar;
