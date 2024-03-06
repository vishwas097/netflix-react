import React from "react";
import { CiPlay1, CiCircleInfo } from "react-icons/ci";
import { useSelector } from "react-redux";

const VideoHeader = ({ title, overview }) => {
  const details = useSelector(store => store.config.details);
  return (
    <div className="absolute text-white pt-[20%] pl-10 w-screen bg-gradient-to-r from-black aspect-video">
      <div className="w-3/12">
        <h1 className="p-2 text-3xl font-bold">{title}</h1>
        <p className="text-sm p-2">{overview}</p>
      </div>
      {!details && <div>
        <button className="bg-white p-4 px-12 rounded-lg text-black">
          <p className="flex">
            <CiPlay1 />
            Play
          </p>
        </button>
        <button className="bg-white p-4 m-2 px-8 rounded-lg text-black">
        <span className="flex">
        <CiCircleInfo className="info-icon" />
        More Info
      </span>
        </button>
      </div>}
    </div>
  );
};

export default VideoHeader;
