import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const userLogin = () => {
  const { user, setUser } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        newUser
      );
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/Home");
      }
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className=" shadow-2xl m-2 rounded-xl  mt-10 flex flex-col ">
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
          <h1 className="mt-2 font-semibold text-xl">What's your email</h1>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="w-full py-3 bg-[#eeeeee] text-black rounded-md placeholder:text-white p-2"
          />
          <h1 className="text-xl font-semibold">Enter password</h1>
          <input
            placeholder="Enter your password"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="py-3 w-full bg-[#eeeeee] text-black rounded-md placeholder:text-white p-2"
          />
          <div className="mx-8">
            <button className="text-2xl bg-black text-white py-2 w-full rounded-md mt-3">
              Log-in
            </button>
            <h1 className="mt-6 pb-2 flex justify-center">
              New user?{" "}
              <Link className="text-blue-400 ml-2" to="/user-signup">
                Create new account
              </Link>
            </h1>
          </div>
        </form>
      </div>
      <Link
        to="/captain-login"
        className="text-xl text-white bg-green-300 text-center py-2 flex justify-center mt-32 mx-24 rounded-md "
      >
        Log in as captain
      </Link>
    </div>
  );
};

export default userLogin;
