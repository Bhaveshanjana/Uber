import React, {useContext}from "react";
import {CaptainDataContext} from '../context/CaptainConetxt'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext);
  return (
    <div>
      <div className="h-2/5 p-3">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            <h2 className="text-2xl font-medium capitalize">{captain.fullname.firstname + " "+captain.fullname.lastname}</h2>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium">₹290</h3>
            <p className="font-semibold">Earned</p>
          </div>
        </div>
        <div className="flex justify-between bg-gray-100 rounded-lg mt-6 p-2">
          <div className="text-center">
            <i className="ri-timer-2-line text-3xl font-thin"></i>
            <h5 className="text-lg font-medium">10</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-speed-up-fill text-3xl font-thine"></i>
            <h5 className="text-lg font-medium">10</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-booklet-line text-3xl font-thin"></i>
            <h5 className="text-lg font-medium">10</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
