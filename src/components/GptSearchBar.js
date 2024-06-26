import React, { useRef } from "react";
import openai from "../utils/openai";
import ErrorPage from "./Error";
import { API_OPTIONS } from "..//utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    // MAKE AN API CALL TO GET MOVIE RESULT

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Pathan, Golmaal, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      <ErrorPage />;
    }

    // console.log(gptResult.choices);
    // console.log(gptResult.choices?.[0]?.message?.content);

    // Gadar, Sholey, Pathan, Golmaal, Koi Mil Gaya
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    // [Gadar, Sholey, Pathan, Golmaal, Koi Mil Gaya]

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise,Promise,Promise,Promise]
    // console.log(promiseArray);

    const tmdbResult = await Promise.all(promiseArray);
    // console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center rounded-full">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-black text-xl rounded-lg bg-opacity-10   text-white col-span-9"
          placeholder="what would you like to watch today ?"
        />
        <button
          className="p-4 m-4 text-xl  bg-red-700  rounded-lg text-white col-span-3 "
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
