import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [captain, setCaptain] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    loading,
    setCaptain,
    setLoading,
    updateCaptain,
  };
  return (
    <CaptainDataContext.Provider value={ value }>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;

