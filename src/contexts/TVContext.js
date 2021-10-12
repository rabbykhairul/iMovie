import { createContext } from "react";

export const initialTVContext = {
  latestShow: null,
  nowPlayingShows: null,
  popularShows: null,
};

const TVContext = createContext(initialTVContext);
export default TVContext;
