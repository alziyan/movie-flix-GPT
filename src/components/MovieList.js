import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"; // Ensure to create and use this CSS file for custom styles

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="p-4 ">
      <h1 className="px-4 m-2 text-2xl">{title}</h1>
      <div className="flex  scrollbar-hide overflow-x-scroll whitespace-nowrap space-x-4 ">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
