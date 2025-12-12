import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50"> 
      <div className=" flex justify-between items-center  py-4 px-8  bg-dark-100/90  backdrop-blur-sm ">
        <div className="text-3xl font-bold text-white"> Nikhil
            <span className="text-Turquoise"> Saini</span>
           <div className="w-4 h-4 rounded-full bg-Turquoise"></div>
        </div>
            
     

      <div className="hidden md:flex  space-x-10">
        <Link to="/" className="relative text-white hover:text-Turquoise group">
          <span>Home</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/about"
          className="relative text-white hover:text-Turquoise  group"
        >
          <span>About</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/skills"
          className="relative text-white hover:text-Turquoise group"
        >
          <span>Skills</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="#" className="relative text-white hover:text-Turquoise group">
          <span>Projects</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/experience"
          className="relative text-white hover:text-Turquoise group"
        >
          <span>Experience</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/contact"
          className="relative text-white hover:text-Turquoise group"
        >
          <span>Contact</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Turquoise transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
       </div>

      {/* Mobile Buttons*/}
      <div className="md:hidden">
        {showMenu ? (
          <FaXmark
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <FaBars
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menus */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#"
            className="relative text-white hover:text-Turquoise group"
          >
            <span>Home</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#"
            className="relative text-white hover:text-Turquoise group"
          >
            <span>About</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#"
            className="relative text-white hover:text-Turquoise group"
          >
            <span>Skills</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#"
            className="relative text-white hover:text-Turquoise group"
          >
            <span>Projects</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#"
            className="relative text-white hover:text-Turquoise group"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
