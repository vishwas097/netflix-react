import React from "react";

const VideoHeader = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[20%] pl-10 w-screen bg-gradient-to-r from-black aspect-video">
      <div className="w-3/12">
        <h1 className="p-2 text-3xl font-bold">{title}</h1>
        <p className="text-sm p-2">{overview}</p>
      </div>
      <div>
        <button className="bg-white p-4 px-12 rounded-lg text-black">
          ▶ Play
        </button>
        <button className="bg-white p-4 m-2 px-8 rounded-lg text-black">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoHeader;
