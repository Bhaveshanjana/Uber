import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainConetxt";
import axios from "axios";

const captainSignup = () => {
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity
      }
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
       localStorage.setItem('token', data.token)
        navigate('/captain-home');
      }
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div>
      <div className=" shadow-2xl m-2 rounded-xl  mt-2 flex flex-col ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          className="w-28 py-4 font-bold underline ml-2"
        ></img>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=" bg-white space-y-4 m-4"
        >
          <h1 className="font-medium text-base">What's your name</h1>
          <div className="flex gap-4">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
              className="w-1/2 py-3 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
            />
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
              className="w-1/2 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
            />
          </div>
          <h1 className=" font-medium text-base">What's your email</h1>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="w-full py-3 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
          />
          <h1 className="font-medium text-base">Enter password</h1>
          <input
            placeholder="Enter your password"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="py-3 w-full bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
          />
           <h1 className="font-medium text-base">Vehical information</h1>
          <div className="flex gap-4">
            <input
              required
              type="text"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              placeholder="vehicleColor"
              className="w-1/2 py-3 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
            />
            <input
              required
              type="text"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              placeholder="vehiclePlate"
              className="w-1/2 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
            />
          </div>
          <div className="flex gap-4">
            <input
              required
              type="number"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              placeholder="vehicleCapacity"
              className="w-1/2 py-3 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
            />
            <select
              required
              type="text"
              value={vehicleType}
              className="w-1/2 bg-[#eeeeee] text-black rounded-md placeholder:text-black p-2"
              placeholder="vehicleType"
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}>
            <option value="" disabled>Select vehicle type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="bike">bike</option>
            </select>
          </div>
          <div className="mx-8">
            <button className="text-2xl bg-black text-white py-2 w-full rounded-md mt-1">
              Create captain
            </button>
            <h1 className="mt-3 flex justify-center">
              have account?{" "}
              <Link className="text-blue-400 ml-2" to="/captain-login">
                Log-in
              </Link>
            </h1>
          </div>
        </form>
      </div>
      <Link
        to="/user-signup"
        className="text-xl text-white bg-green-300 text-center py-2 flex justify-center mt-14 mb-2 mx-24 rounded-md"
      >
        Signup as user
      </Link>
    </div>
  );
};

export default captainSignup;
