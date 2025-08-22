import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@components/ThemToogle";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Logo />
          <DesktopMenu />
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <SearchBar
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
            />
            {/* theme button  */}
            <ThemeToggle />

            {/* user part */}
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
