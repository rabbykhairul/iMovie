import { createContext } from "react";

export const initialMovieContext = {
  latestShow: null,
  nowPlayingShows: null,
  popularShows: null,
};

const MovieContext = createContext(initialMovieContext);
export default MovieContext;
