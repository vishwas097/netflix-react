import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BACKGROUND} alt="logo" className="w-screen h-screen object-cover" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
