import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  // if (!movieNames) <ErrorPage />;

  return (
    <div className="mt-2 bg-black bg-opacity-90 text-white">
      {movieResults &&
        movieNames.map((movie, index) => (
          <MovieList
            key={index}
            title={movieNames[index]}
            movies={movieResults[index]}
          />
        ))}
    </div>
  );
};

export default GptMovieSuggestions;
