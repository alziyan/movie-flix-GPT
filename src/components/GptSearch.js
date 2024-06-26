import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { IMG_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="">
        <img
          className="fixed -z-10 h-screen w-screen  "
          src={IMG_BG}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
