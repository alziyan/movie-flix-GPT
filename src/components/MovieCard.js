import React from "react";
import { IMG_CDN_URL } from "./../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-32 m-2 rounded-lg ">
      <img
        className="rounded hover:scale-110 transform transition duration-300 ease-in-out "
        src={IMG_CDN_URL + poster_path}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
