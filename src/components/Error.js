import React from "react";
import Header from "./Header";
import { BACKGROUND } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/browse");
  };
  return (
    <div>
      <Header error={true} />
      <div className="absolute">
        <img src={BACKGROUND} alt="logo" className="w-screen" />
      </div>
      <div className="w-3/12 absolute left-0 right-0 my-32 mx-auto bg-black p-8 bg-opacity-70 text-center">
        <h1 className="font-bold text-red-700 text-3xl m-2">Error</h1>
        <h1 className="font-bold text-white text-xl m-2">
          This page doesn’t exist Please check your URL or return to LinkedIn
          home.
        </h1>
        <button
          onClick={goToHome}
          className="font-bold pr-4 p-2 px-6 m-4 rounded-md bg-purple-700 text-white"
        >
          Go to your Browse
        </button>
      </div>
    </div>
  );
};

export default Error;
