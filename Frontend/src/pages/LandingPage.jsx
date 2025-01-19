import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

const LandingPage = () => {
  const [pick, setPick] = useState('');
  const [destination, setDestination] = useState('');
  const [pannelOpen, setPannelOpen] = useState(false);
  const pannelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

useGSAP(function() {
  if (pannelOpen) {
    gsap.to(pannelRef.current, {
      height: '70%',
    });
  } else {
    gsap.to(pannelRef.current, {
      height: '0%',
    });
  }
}, [pannelOpen]);

  return (
    <div className="relative h-screen">
      <img
        className="w-[130px] p-4 absolute "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="">
        <img
          className="h-screen w-screen object-cover"
          src="https://st5.depositphotos.com/15409960/67014/v/450/depositphotos_670145438-stock-illustration-abstract-map-background-colorful-abstract.jpg"
          alt=""
        />
      </div>
      <div className="h-screen flex flex-col justify-end top-0 w-full absolute">
        <div className="  h-[30%] bg-white p-4 relative">
          <h2 className="text-xl font-semibold">Find a trip</h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-4 mt-2"
          >
            <div className="line absolute h-16 w-1 top-[44%] left-8 bg-black rounded-full "></div>
            <input
            onClick={(e) => {
              setPannelOpen(true);
            }}
            value={pick}
            onChange={(e)=>{
              setPick(e.target.value);
            }}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
            onClick={()=>{
              setPannelOpen(true);
            }}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={pannelRef} className="h-[70%] bg-red-500 ">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum illum odio alias, aspernatur explicabo quod eveniet maxime error placeat laborum perferendis, in id! Quae nihil perferendis facilis fuga animi.</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
