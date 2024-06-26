import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // early return

  let randomNumber = Math.floor(Math.random() * 20);

  const mainMovie = movies[randomNumber];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
