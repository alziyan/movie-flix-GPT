import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //   console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="pl-12 text-white -mt-44 relative z-100">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming"} movies={movies.upComing} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
