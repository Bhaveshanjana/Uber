import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "1-C-80, housing board, segwa, chittoragrh",
    "1-A-20, housing board, segwa, chittoragrh",
    "3-B-10, pratap nagar, sethi, chittoragrh",
    "55, gandhi nagar, old city, chittoragrh",
  ];
  return (
    <div className="space-y-2">
      {locations.map((el) => {
        return (
          <div
            onClick={() => {
              props.setvehiclepanel(true);
              props.setpanelOpen(false);
            }}
            key={el}
            className="flex items-center border-2 border-gray-50 active:border-black rounded-lg gap-6 px-3 py-2"
          >
            <h2>
              <i className="ri-map-pin-line bg-[#eeeeee] text-xl rounded-full "></i>
            </h2>
            <p className="font-medium">{el}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
