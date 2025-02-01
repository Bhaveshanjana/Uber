import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className=" text-center ml-1.5 w-[92%] bg-gray-100 rounded-lg"
      >
        <i className="ri-arrow-down-wide-fill text-3xl"></i>
      </h3>
      <div className="flex justify-between pt-6 border-b-2">
        <img
          className="h-16 bg-gray-200 rounded-full"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png"
          alt=""
        />
        <div className="text-end">
          <h2 className=" text-gray-500 text-lg capitalize">
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-2xl font-semibold">
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p className=" text-gray-500 text-lg">vehicle as you select</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 flex-col px-4 pt-4">
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
          <div className="flex items-center gap-6">
            <i className="ri-bank-card-fill text-xl"></i>
            <div>
              <h1 className="text-2xl font-semibold ">
                ${props.fare[props.vehicleType]}
              </h1>
              <p className="text-lg text-gray-600"> Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
