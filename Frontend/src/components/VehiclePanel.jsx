import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setvehiclepanel(false);
        }}
        className=" absolute top-2 text-center ml-1.5 w-[92%] bg-gray-100 rounded-lg"
      >
        <i className="ri-arrow-down-wide-fill text-3xl"></i>
      </h3>
      <h1 className="text-2xl font-semibold pt-10 mb-2">Choose a vehicle</h1>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex justify-between border-2 active:border-black rounded-lg py-1"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712278121/assets/e0/25905c-43bd-4797-91e6-29d0ae9cb48d/original/Taxi-%281%29-%286%29.png"
          alt=""
        />
        <div className="w-1/2">
          <h1 className="font-semibold ">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill px-2"></i>4
            </span>
          </h1>

          <h1 className="text-sm text-gray-500">
            Affordable, comfortable ride{" "}
          </h1>
        </div>
        <h1 className="font-bold py-2 px-2">$193</h1>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex justify-between border-2 active:border-black rounded-lg py-1"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h1 className="font-semibold">
            Bike{" "}
            <span>
              <i className="ri-user-3-fill px-2"></i>1
            </span>
          </h1>

          <h1 className="text-sm text-gray-500">Affordable, bike ride </h1>
        </div>
        <h1 className="font-bold py-2 px-2">$67</h1>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex justify-between border-2 active:border-black rounded-lg py-1"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h1 className="font-semibold">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill px-2"></i>5
            </span>
          </h1>

          <h1 className="text-sm text-gray-500">Affordable, compact ride </h1>
        </div>
        <h1 className="font-bold py-2 px-2">$100</h1>
      </div>
    </div>
  );
};

export default VehiclePanel;
