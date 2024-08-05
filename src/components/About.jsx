import React from "react";
import img from "../assets/img/about.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center gap-10 lg:px-20 px-5 py-24">
      <div className="hidden md:flex w-full lg:w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="w-full lg:w-1/2 ">
        <h1 className="text-4xl font-semibold text-center lg:text-start pb-8 text-hoverColor2">
          About Us
        </h1>
        <p className="text-justify lg:text-start ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vel
          reprehenderit similique dignissimos quidem, eius aut ducimus
          voluptatem ab consequatur nisi illo maiores obcaecati, quasi, quo
          iusto laboriosam soluta sit. Labore repellat autem laboriosam ea
          accusantium blanditiis ut, aut similique?
        </p>
        <br />

        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet
          unde incidunt aut harum ad ea eius eveniet aperiam et?
        </p>
        <div className="hidden lg:flex lg:flex-col gap-4 pt-10">
          <h2 className="text-2xl text-hoverColor2 font-semibold">
            Connect with us:
          </h2>
          <div className="flex gap-4 text-4xl cursor-pointer">
            <FaFacebookF className=" text-white p-2 bg-backgroundColor hover:bg-hoverColor rounded-md animate-pulse" />
            <FaInstagram className=" text-white p-2 bg-backgroundColor hover:bg-hoverColor rounded-md animate-pulse" />
            <FaTwitter className=" text-white p-2 bg-backgroundColor hover:bg-hoverColor rounded-md animate-pulse" />
            <FaLinkedin className=" text-white p-2 bg-backgroundColor hover:bg-hoverColor rounded-md animate-pulse" />
            <FaYoutube className=" text-white p-2 bg-backgroundColor hover:bg-hoverColor rounded-md animate-pulse" />
          </div>
        </div>
      </div>
      <div className="md:hidden w-full lg:w-1/2">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
