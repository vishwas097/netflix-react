import React from "react";
import { useSelector } from "react-redux";
import VideoHeader from "./VideoHeader";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const displayMovie = movies[1];
  const { original_title, overview, id } = displayMovie;
  return (
    <div>
      <VideoHeader title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
