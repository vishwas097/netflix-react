import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (store, action) => {
      store.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (store, action) => {
      store.popularMovies = action.payload;
    },
    addMovieTrailer: (store, action) => {
      store.movieTrailer = action.payload;
    },
    addTopRatedMovies: (store, action) => {
      store.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (store, action) => {
      store.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies
} = movieSlice.actions;

export default movieSlice.reducer;
