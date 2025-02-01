import React, { useRef, useState } from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold py-2">Available rides!</h2>
      <div className="flex justify-between items-center px-2 py-4 bg-yellow-300/60 rounded-md">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <h3 className="text-xl font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h3>
        </div>
        <h3 className="text-gray-600 text-lg font-medium">1.1km</h3>
      </div>
      <div className="flex items-center justify-between gap-4 flex-col px-4 mt-4">
        <div className="w-full space-y-6">
          <div className="flex items-center gap-6 border-b-2 ">
            <i className="ri-map-pin-range-line text-xl"></i>
            <div>
              <p className="text-lg text-gray-600"> {props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b-2">
            <i className="ri-map-pin-time-fill text-xl"></i>
            <div>
              <p className="text-lg text-gray-600">
                {" "}
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b-2">
            <i className="ri-bank-card-fill text-xl"></i>
            <div>
              <h1 className="text-xl font-semibold ">${props.ride?.fare}</h1>
              <p className="text-lg text-gray-600"> Cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 text-xl">
          <button
            onClick={() => {
              props.setAcceptRide(true);
              props.confirmRide();
            }}
            className=" bg-green-500 text-white p-1 rounded-md "
          >
            Confirm
          </button>
          <button
            onClick={() => {
              props.setRidePopUp(false);
            }}
            className=" bg-red-600 text-white p-1 rounded-md"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
