import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="-mt-[20%] relative z-50">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
