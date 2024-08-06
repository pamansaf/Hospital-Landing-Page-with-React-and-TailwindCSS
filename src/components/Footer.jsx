import React from "react";
import { Link } from "react-scroll";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row gap-5 lg:px-20 px-8 py-10 text-sm">
        <div className=" w-full md:w-1/4 flex flex-col">
          <h1 className="font-semibold text-xl py-4 md:pt-0">Hospital.</h1>
          <p>
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div className="w-full md:w-1/4 flex flex-col lg:ml-36">
          <h1 className="font-semibold text-xl py-4 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
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
          </nav>
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          <h1 className="font-semibold text-xl py-4 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          <h1 className="font-semibold text-xl py-4 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="https://www.google.com/maps/place/Masjid+Agung+Sulthan+Jeumpa/@5.1979068,96.697429,17z/data=!3m1!4b1!4m6!3m5!1s0x30474322df3bdf4b:0x7ab9955a14df3dc0!8m2!3d5.1979015!4d96.7020424!16s%2Fg%2F1pztfyb7s?entry=ttu"
              target="_blank"
              className="flex items-center gap-3 hover:text-hoverColor transition-all cursor-pointer"
            >
              <FaMapMarkerAlt />
              Kota Bireuen, Aceh, Indonesia.
            </a>
            <a
              href="https://github.com/pamansaf?tab=repositories"
              target="_blank"
              className="flex items-center gap-3 hover:text-hoverColor transition-all cursor-pointer"
            >
              <FaGithub />
              github.com/pamansaf
            </a>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center gap-3 hover:text-hoverColor transition-all cursor-pointer"
            >
              <IoMdMail />
              safwan.ssy@gmail.com
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center gap-3 hover:text-hoverColor transition-all cursor-pointer"
            >
              <FaPhoneAlt />
              +62 821 2229 2573
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-8 border-t border-backgroundColor2">
          Made with <span className="text-lg text-red-500">❤</span> by{" "}
          <a
            href="https://portfolio-by-pamansaf.vercel.app/"
            target="_blank"
            className="text-red-500 font-bold hover:underline"
          >
            pamansaf
          </a>{" "}
          | © 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
