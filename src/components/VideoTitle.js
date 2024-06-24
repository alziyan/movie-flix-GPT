import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen h-screen pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-lg w-1/3 py-6">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold py-2 px-8 mr-5 rounded hover:bg-gray-400">
          ▷ Play
        </button>
        <button className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-500">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
