import React from "react";
import Button from "../layouts/Button";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import img from "../assets/img/home.svg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-8 justify-center items-center lg:px-20 px-5 pt-24 text-white bg-backgroundColor2 ">
      <div className="lg:w-1/2 flex flex-col gap-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-hoverColor2 leading-tight">
          Layanan Terbaik untuk Kesehatan Anda dan Keluarga...
        </h1>
        <p className="text-xs lg:text-sm text-black leading-tight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          pariatur aliquam explicabo fuga expedita quod cumque dolorem
          blanditiis, sed nihil accusa Dicta reprehenderit nemo illum explicabo,
          culpa odio inventore placeat soluta error! Recusandae repellen.
        </p>

        <Button title="See Services" />
      </div>
      <div className="lg:w-1/2 flex justify-between items-center gap-4">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
