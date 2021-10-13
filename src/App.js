import { useEffect, useState } from "react";
import TVContext, { initialTVContext } from "./contexts/TVContext";
import MovieContext, { initialMovieContext } from "./contexts/MovieContext";

import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import {
  getLatestShow,
  getMostPopularShows,
  getNowPlayingShows,
  TYPE_MOVIE,
  TYPE_TV,
} from "./services/tvAndMovieService";
import ContentSection from "./components/ContentSection";

function App() {
  const [moviesInfo, setMoviesInfo] = useState(initialMovieContext);
  const [TVInfo, setTVInfo] = useState(initialTVContext);

  useEffect(() => {
    loadMoviesInfo();
    loadTVInfo();
  }, []);

  const loadMoviesInfo = async () => {
    const latestShow = await getLatestShow(TYPE_MOVIE);
    const nowPlayingShows = await getNowPlayingShows(TYPE_MOVIE);
    const popularShows = await getMostPopularShows(TYPE_MOVIE);

    setMoviesInfo({
      latestShow,
      featuredShow: latestShow,
      nowPlayingShows,
      popularShows,
    });
  };

  const loadTVInfo = async () => {
    const latestShow = await getLatestShow(TYPE_TV);
    const nowPlayingShows = await getNowPlayingShows(TYPE_TV);
    const popularShows = await getMostPopularShows(TYPE_TV);

    setTVInfo({
      latestShow,
      featuredShow: latestShow,
      nowPlayingShows,
      popularShows,
    });
  };

  return (
    <div className="parent-container">
      <LeftSideBar />
      <MovieContext.Provider value={moviesInfo}>
        <TVContext.Provider value={TVInfo}>
          <ContentSection />
          <RightSideBar />
        </TVContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
