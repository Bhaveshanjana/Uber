import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const { user, setUser } = useContext(UserDataContext);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate("/user-login");
      }
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <div className=" shadow-2xl m-2 rounded-xl  mt-6 flex flex-col ">
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
          <div className="mx-8">
            <button className="text-2xl bg-black text-white py-2 w-full rounded-md mt-1">
              Create account
            </button>
            <h1 className="mt-3 flex justify-center">
              have account?{" "}
              <Link className="text-blue-400 ml-2" to="/user-login">
                Log-in
              </Link>
            </h1>
          </div>
        </form>
      </div>
      <Link
        to="/captain-signup"
        className="text-xl text-white bg-green-300 text-center py-2 flex justify-center mt-24 mx-24 rounded-md"
      >
        Signup as captain
      </Link>
    </div>
  );
};

export default UserSignup;
