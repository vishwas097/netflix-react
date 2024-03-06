import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { CATEGORY_MOVIES } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  const category = CATEGORY_MOVIES.find(
    (type) => type.name == title
  ).identifier;
  return (
    <div>
      <h1 className="text-4xl p-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((mov) => (
            <Link to={"/movie/" + category + "/" + mov.id} key={mov.id}>
              <MovieCard poster_path={mov.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
