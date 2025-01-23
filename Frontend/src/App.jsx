import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptianLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import LandingPage from "./pages/LandingPage";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";
import CaptainMap from "./pages/CaptainMap";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Home"
          element={
            <UserProtectWrapper>
              <LandingPage />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user-logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route path="/user-login" element={<UserLogin />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/Riding" element={<Riding />} />
        <Route path="/captain-login" element={<CaptianLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-map" element={<CaptainMap />} />
      </Routes>
    </div>
  );
};

export default App;
