import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={120} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={120} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={120} className=" text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-20 px-8 py-28 bg-backgroundColor2">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-hoverColor2">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 ">
          <Button title="See Services" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-10">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;
