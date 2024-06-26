// https://api.themoviedb.org/3/movie/top_rated

import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("top Rated", json);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated;
