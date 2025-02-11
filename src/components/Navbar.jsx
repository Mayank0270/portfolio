import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed w-full h-20 px-4 bg-black text-white flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-bold">Mayank</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden z-50 text-gray-400 hover:text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="text-2xl space-y-8">
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
