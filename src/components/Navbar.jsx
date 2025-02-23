import React from "react";
import NavbarImage from "../assets/NavbarImage.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <img
          src={NavbarImage}
          alt="NavbarImage"
          className="h-auto max-w-full md:max-w-[200px] lg:max-w-[250px]"
        />
      </div>
    </header>
  );
};

export default Navbar;
