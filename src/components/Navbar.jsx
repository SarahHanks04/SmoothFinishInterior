// import React from "react";
// import NavbarImage from "../assets/NavbarImage.png";

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white shadow-md overflow-hidden">
//       <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         <img
//           src={NavbarImage}
//           alt="NavbarImage"
//           className="h-auto max-w-full md:max-w-[200px] lg:max-w-[250px]"
//         />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={Logo} alt="NavbarImage" size={16} className="w-2 h-2" />
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
            <a href="#" className="block py-2">
              Home
            </a>
            <a href="#" className="block py-2">
              About Us
            </a>
            <a href="#" className="block py-2">
              Contact
            </a>
          </div>
        )}
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
