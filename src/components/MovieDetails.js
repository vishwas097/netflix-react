import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import VideoHeader from "./VideoHeader";
import MovieList from "./MovieList";
import { CATEGORY_MOVIES } from "../utils/constants";
import { changeDetails } from "../utils/configSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const category = CATEGORY_MOVIES.find(
    (type) => type.identifier == params.type
  ).name;
  const navigate = useNavigate();
  const movieList = useSelector((store) => store?.movies);

  useEffect(() => {
    !movieList[params.type] && navigate("/browse");
    dispatch(changeDetails(true));
  }, []);
  const movie = movieList[params.type]?.find((mov) => mov.id == params.movieId);
  console.log(movie);
  useMovieTrailer(params.movieId);
  if (!movie) return;
  return (
    <div>
      <Header />
      <div>
        <VideoHeader title={movie.original_title} overview={movie.overview} />
        <VideoBackground key={movie?.id} movieId={movie?.id} />
        <div className="bg-black">
          <div className="-mt-[10%] relative z-50">
            <MovieList title={category} movies={movieList[params.type]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
