import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdLocalHospital } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Contact from "../models/Contact";
import Button from "../layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between p-4 md:px-20 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,0.24)_0px_3px_8px)">
          <div className="flex flex-row items-center cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center gap-2 cursor-pointer text-3xl font-semibold "
            >
              <MdLocalHospital className="bg-brightColor p-1 rounded-md text-4xl" />
              <h1>Hospital.</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            >
              Blog
            </Link>
          </nav>
          <div className="flex flex-row items-center gap-3">
            <div className="hidden lg:flex justify-center items-center gap-2 py-2 px-3 bg-teal-100 rounded-md">
              <FaSearch className="text-2xl text-backgroundColor" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-transparent text-sm outline-none text-gray-500"
              />
            </div>
            <div onClick={openForm} className="hidden lg:flex">
              <Button title="Contact Us" />
            </div>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center p-2 rounded-md hover:bg-hoverColor2 transition-all duration-300 ease-in-out cursor-pointer">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-8 gap-8 w-full h-fit transition-transform duration-300 ease-in-out}`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <div className="lg:hidden">
            <Button title="Contact Us" onClick={openForm} />
          </div>
          <div className="flex justify-center w-[70%] mx-auto items-center gap-2 py-4 px-3 bg-teal-100 rounded-md">
            <FaSearch className="text-2xl text-backgroundColor" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-transparent text-base outline-none text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
