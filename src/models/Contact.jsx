import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-88 md:w-96 space-y-5 p-5 md:p-10 bg-white rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="userFirtsName"
              id="userFirtsName"
              placeholder="First Name"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone Number"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
          </div>
          <div className="flex justify-between gap-5 pt-2">
            <button className="bg-backgroundColor hover:bg-hoverColor2 text-white px-4 py-2 rounded-md">
              Book Appointment
            </button>
            <Button title="Close" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
