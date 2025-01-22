import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(true)
  const ridePopUpPanelRef = useRef(null)
  useGSAP(
    function () {
      if (ridePopUp) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUp]
  );

  return (
    <div className="h-screen">
      <div className="fixed flex justify-between w-full top-4">
        <img
          className="w-[80px] ml-3 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uberlogo"
        />
        <Link to="/captain-login" className=" text-2xl mr-3 bg-white/80 rounded-full px-1">
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div>
      <CaptainDetails/>

      </div>
      <div ref={ridePopUpPanelRef} className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8">
        <RidePopUp setRidePopUp={setRidePopUp} />
      </div>
    </div>
  );
};

export default CaptainHome;
