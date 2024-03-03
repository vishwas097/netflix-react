import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-4xl p-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((mov) => (
            <MovieCard key={mov.id} poster_path={mov.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
