import React, { useState } from "react";
import Logo from "./Logo"; // ✅ assuming Logo.jsx is in same folder
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileToggle from "./MobileToggle";


export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100/75 dark:bg-gray-800/70 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4">
        <Logo />
        <DesktopNav darkMode={darkMode} setDarkMode={setDarkMode} />
        <MobileToggle isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </header>
  );
}
