import { createContext } from "react";

export const initialMovieContext = {
  latestShow: null,
  featuredShow: null,
  nowPlayingShows: null,
  popularShows: null,
};

const MovieContext = createContext(initialMovieContext);
export default MovieContext;
