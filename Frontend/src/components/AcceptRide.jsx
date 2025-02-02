import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AcceptRide = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`,{
      params:{rideId: props.ride._id,
      otp: otp}
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("captain-token")}`,
      },
    })
    navigate('/captain-map')

    if(response.status === 200){
      props.setRidePopUp(false)
      props.setAcceptRide(false)
    }
  };
  return (
    <div className="space-y-3">
      <h3 className=" text-center ml-4 w-[92%] bg-gray-100 rounded-lg">
        <i
          onClick={() => {
            props.setAcceptRide(false);
            
          }}
          className="ri-arrow-down-wide-fill text-3xl "
        ></i>
      </h3>
      <h2 className="text-2xl font-semibold py-2">
        Click confirm to continue!
      </h2>
      <div className="flex justify-between items-center px-2 py-4 bg-yellow-300/60 rounded-md ">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <h3 className="text-xl font-medium capitalize">{props.ride?.user.fullname.firstname}</h3>
        </div>
        <h3 className="text-gray-600 text-lg font-medium">1.1km</h3>
      </div>
      <div className="flex items-center justify-between gap-4 flex-col px-1 pt-2 space-y-4">
        <div className="w-full bg-gray-100 rounded-md px-2 shadow-lg">
          <h2 className="text-2xl underline my-1">Pick up</h2>
          <div className="flex items-center gap-6 border-b-2 py-2 ">
            <i className="ri-map-pin-range-line text-xl"></i>
            <div>
            
              <p className="text-lg text-gray-600">
                {" "}
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <h2 className="text-2xl underline mt-2">Drop location</h2>
          <div className="flex items-center gap-6 border-b-2 py-2">
            <i className="ri-map-pin-time-fill text-xl"></i>
            <div>
             
              <p className="text-lg text-gray-600">
                {" "}
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 py-2 ">
            <i className="ri-bank-card-fill text-xl"></i>
            <div>
              <h1 className="text-xl font-semibold ">${props.ride?.fare}</h1>
              <p className="text-lg text-gray-600"> Cash</p>
            </div>
          </div>
        </div>
        <div className="w-full gap-3 text-xl ">
          <form
            onSubmit={
              submitHandler
            }
            className="flex justify-center flex-col"
          >
            <input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              type="number"
              placeholder="Enter OTP "
              className="px-4 mb-2 bg-gray-100 p-2"
            />
            <button 
              
              className=" bg-green-500 text-white p-2 rounded-md text-center"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcceptRide;
