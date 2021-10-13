import React, { useContext } from "react";
import TVContext from "../contexts/TVContext";
import MovieContext from "../contexts/MovieContext";
import SearchBar from "./commons/SearchBar";
import WatchRecommendationsList from "./commons/WatchRecommendationsList";

const RightSideBar = () => {
  const tvInfo = useContext(TVContext);
  const movieInfo = useContext(MovieContext);

  const getPopularMoviesRecommendations = () =>
    movieInfo.popularShows?.slice(0, 2);

  const getWatchlistsRecommendations = () => tvInfo.popularShows?.slice(0, 4);

  return (
    <aside className="right-side-bar">
      <SearchBar />
      <div className="inner-container">
        <WatchRecommendationsList
          title="Popular Movies"
          items={getPopularMoviesRecommendations()}
        />
        <WatchRecommendationsList
          title="Watchlists"
          items={getWatchlistsRecommendations()}
        />
      </div>
    </aside>
  );
};

export default RightSideBar;
