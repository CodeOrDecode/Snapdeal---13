import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Afterloginhome from "../Components/Afterloginhome";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/afterlogin" element={<Afterloginhome />} />
        <Route />
      </Routes>
    </>
  );
};

export default Allroutes;
