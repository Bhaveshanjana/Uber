import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AcceptRide from "../components/AcceptRide";
import { CaptainDataContext } from "../context/CaptainConetxt";
import { SocketContext } from "../context/socketContext";
import axios from "axios";

const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(false);
  const ridePopUpPanelRef = useRef(null);

  const [ride, setRide] = useState(null);

  const [acceptRide, setAcceptRide] = useState(false);
  const AcceptRideRef = useRef(null);

  const { captain } = useContext(CaptainDataContext);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };
    // const locationInterval = setInterval(updateLocation, 10000);
    // return () => clearInterval(locationInterval);
  });

  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopUp(true);
  });

  async function confirmRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
        {
          rideId: ride._id,
          captainId: captain._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("captain-token")}`,
          },
        }
      );
      setRidePopUp(false);
      setAcceptRide(true);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

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
  useGSAP(
    function () {
      if (acceptRide) {
        gsap.to(AcceptRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(AcceptRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [acceptRide]
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div>
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <RidePopUp
          ride={ride}
          confirmRide={confirmRide}
          setRidePopUp={setRidePopUp}
          setAcceptRide={setAcceptRide}
        />
      </div>
      <div
        ref={AcceptRideRef}
        className="fixed w-full h-screen translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <AcceptRide setAcceptRide={setAcceptRide} />
      </div>
    </div>
  );
};

export default CaptainHome;
