import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from '../components/WaitingForDriver.jsx'

const LandingPage = () => {
  const [pick, setPick] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [vehiclepanel, setvehiclepanel] = useState(false);
  const [confirmVehiclePanel, setConfirmVehiclePanel] = useState(false);
  const vehiclepanelRef = useRef(null);
  const confirmVehiclePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef =useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
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
              onClick={(e) => {
                setpanelOpen(true);
              }}
              value={pick}
              onChange={(e) => {
                setPick(e.target.value);
              }}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="w-full bg-[#eeeeee] px-10 py-2 rounded-md"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setvehiclepanel={setvehiclepanel}
            setpanelOpen={setpanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclepanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <VehiclePanel
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setvehiclepanel={setvehiclepanel}
        />
      </div>
      <div
        ref={confirmVehiclePanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <ConfirmedRide setConfirmVehiclePanel={setConfirmVehiclePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <LookingForDriver  setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver} />
      </div>
      <div
      ref={waitingForDriverRef}
        className="fixed w-full translate-y-full z-10 bottom-0 space-y-4 bg-white p-2 pb-8"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default LandingPage;
