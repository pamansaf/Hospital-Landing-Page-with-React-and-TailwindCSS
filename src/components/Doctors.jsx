import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/img/doc6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-hoverColor2">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            commodi.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="my-10">
        <Slider ref={slider} {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="h-[350px] rounded-xl bg-backgroundColor2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer "
            >
              <div>
                <img
                  src={item.img}
                  alt="img"
                  className="h-60 rounded-t-xl w-full text-black bg-brightColor"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{item.name}</h1>
                <h3 className="pt-2">{item.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
