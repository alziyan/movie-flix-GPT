import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center rounded-full">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 bg-black text-xl rounded-lg bg-opacity-10   text-white col-span-9"
          placeholder="what would you like to watch today ?"
        />
        <button className="p-4 m-4 text-xl  bg-red-700  rounded-lg text-white col-span-3 ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
