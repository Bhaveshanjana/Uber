import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver.jsx";
import { SocketContext } from "../context/socketContext.jsx";
import { UserDataContext } from "../context/UserContext.jsx";
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [vehiclepanel, setvehiclepanel] = useState(false);
  const [confirmVehiclePanel, setConfirmVehiclePanel] = useState(false);
  const vehiclepanelRef = useRef(null);
  const confirmVehiclePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);

  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);

  const [ride, setRide] = useState(null);
  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", ride => {
    setVehicleFound(false);
    setWaitingForDriver(true);
    setRide(ride);
  });

  socket.on('ride-started', ride =>{
    console.log("ride");
    
    setWaitingForDriver(false);
    navigate('/riding')
  })

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPickupSuggestions(response.data);
    } catch (error) {
      console.error(
        "Error fetching suggestions:",
        error?.response?.data || error.message || error
      );
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch {
      throw new Error("error getting suggestion");
    }
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclepanel) {
        gsap.to(vehiclepanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclepanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclepanel]
  );
  useGSAP(
    function () {
      if (confirmVehiclePanel) {
        gsap.to(confirmVehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmVehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmVehiclePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  async function continueBtn() {
    setvehiclepanel(true);
    setpanelOpen(false);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
        {
          params: {
            pickup,
            destination,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFare(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function createRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/create`,
        {
          pickup,
          destination,
          vehicleType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="w-[130px] p-4 absolute "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="https://st5.depositphotos.com/15409960/67014/v/450/depositphotos_670145438-stock-illustration-abstract-map-background-colorful-abstract.jpg"
          alt="map"
        />
      </div>
      <div className="h-screen flex flex-col justify-end top-0 w-full absolute">
        <div className="  h-[30%] bg-white p-4 relative">
          <h2 className="text-xl font-semibold">Find a trip</h2>
          <h2
            ref={panelCloseRef}
            onClick={() => {
              setpanelOpen(false);
            }}
            className="text-2xl right-6 top-4  absolute "
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-4 mt-2"
          >
            <div className="line absolute h-16 w-1 top-[44%] left-8 bg-black rounded-full "></div>
            <input
              onClick={() => {
                setpanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button
            onClick={continueBtn}
            className="w-full mt-6  bg-orange-300 rounded-md p-1 font-medium"
          >
            Chose Vehicle
          </button>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setvehiclepanel={setvehiclepanel}
            setpanelOpen={setpanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclepanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <VehiclePanel
          selectVehicle={setVehicleType}
          fare={fare}
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setvehiclepanel={setvehiclepanel}
        />
      </div>
      <div
        ref={confirmVehiclePanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <ConfirmedRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <LookingForDriver
          pickup={pickup}
          createRide={createRide}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <WaitingForDriver
          pickup={pickup}
          ride={ride}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
    </div>
  );
};

export default LandingPage;
