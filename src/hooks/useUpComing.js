// https://api.themoviedb.org/3/movie/top_rated

import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  const dispatch = useDispatch();

  const getUpComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("Upcoming", json);
    dispatch(addUpComing(json.results));
  };

  useEffect(() => {
    getUpComing();
  }, []);
};

export default useUpComing;
