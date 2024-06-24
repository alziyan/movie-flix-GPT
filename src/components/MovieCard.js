import React from "react";
import { IMG_CDN_URL } from "./../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-32 m-1">
      <img src={IMG_CDN_URL + poster_path} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
