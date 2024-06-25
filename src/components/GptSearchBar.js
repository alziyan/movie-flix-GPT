import React, { useRef } from "react";
// import openai from "../utils/openai";
import OpenAI from "openai";
import { OPENAI_KEY } from "./../utils/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const openai = new OpenAI({
    apiKey: OPENAI_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
  });

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // MAKE AN API CALL TO GET MOVIE RESULT

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 2 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Pathan, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion.choices);
    // console.log(gptResults.choices?.[0]?.message?.content);
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
          // onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
