import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainMap = () => {
  const [finishRide, setFinishRide] = useState(false);
  const FinishRidePopUpRef = useRef(null);

  useGSAP(
    function () {
      if (finishRide) {
        gsap.to(FinishRidePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(FinishRidePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRide]
  );
  return (
    <div className="h-screen">
      <div className="fixed flex justify-between w-full top-4">
        <img
          className="w-[80px] ml-3 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uberlogo"
        />
        <Link
          to="/captain-login"
          className=" text-2xl mr-3 bg-white/80 rounded-full px-1"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="bg-yellow-400/55 py-2 h-1/5">
        <h2
          onClick={() => {
            setFinishRide(true);
          }}
          className=" text-center flex justify-center ml-4 w-[92%] shadow-xl rounded-lg "
        >
          <i className="ri-arrow-up-wide-fill text-3xl "></i>
        </h2>
        <div className="flex justify-between pt-9 mb-4 px-4">
          <h2 className="text-xl font-medium shadow-xl px-3 rounded-lg ">
            {" "}
            <span className="mr-1.5">
              <i className="ri-compass-discover-line"></i>
            </span>
            4km. Away{" "}
          </h2>
          <button
            onClick={() => {
              setFinishRide(true);
            }}
            className="text-xl font-medium shadow-xl px-3 py-1 rounded-lg bg-green-500 text-white"
          >
            Complete ride
          </button>
        </div>
      </div>
      <div
        ref={FinishRidePopUpRef}
        className="fixed w-full h-screen translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <FinishRide setFinishRide={setFinishRide} />
      </div>
    </div>
  );
};

export default CaptainMap;
