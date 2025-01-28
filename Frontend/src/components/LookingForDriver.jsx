import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setVehicleFound(false)
        }}
        className=" text-center ml-4 w-[92%] bg-gray-100 rounded-lg"
      >
        <i className="ri-arrow-down-wide-fill text-3xl"></i>
      </h3>
      <h2 className="text-2xl font-semibold pt-4">Looking for a driver</h2>
      <div className="flex items-center justify-between gap-4 flex-col px-4">
        <img
          className="h-28"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png"
          alt=""
        />
        <div className="w-full space-y-3">
          <div className="flex items-center gap-6 border-b-2 ">
            <i className="ri-map-pin-range-line text-xl"></i>
            <div>
             
              <p className="text-lg text-gray-600">
               {props.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b-2">
            <i className="ri-map-pin-time-fill text-xl"></i>
            <div>
              
              <p className="text-lg text-gray-600">
               {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b-2">
            <i className="ri-bank-card-fill text-xl"></i>
            <div>
              <h1 className="text-xl font-semibold ">₹ {props.fare[props.vehicleType]}</h1>
              <p className="text-lg text-gray-600"> Cash</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => {
            props.setVehicleFound(false);
          props.setWaitingForDriver(true);
        }}
      className="bg-yellow-100 w-full text-2xl rounded-md mt-4">ok</button>
    </div>
  );
};

export default LookingForDriver;
