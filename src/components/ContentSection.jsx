import React, { useContext, useState } from "react";
import { TYPE_MOVIE, TYPE_TV } from "../services/tvAndMovieService";
import MovieContext from "../contexts/MovieContext";
import TVContext from "../contexts/TVContext";
import TabList from "./commons/TabList";
import FeaturedShowcard from "./commons/FeaturedShowCard";
import Slider from "./commons/Slider";
import InfoCardVertical from "./commons/InfoCardVertical";

const TABS = [
  { title: "Movie", name: TYPE_MOVIE },
  { title: "TV Show", name: TYPE_TV },
];

const ContentSection = () => {
  const movieInfo = useContext(MovieContext);
  const tvInfo = useContext(TVContext);

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [featuredTV, setFeaturedTV] = useState(null);

  const getFeaturedShow = () => {
    if (activeTab.name === TYPE_MOVIE)
      return featuredMovie || movieInfo.featuredShow;
    else return featuredTV || tvInfo.featuredShow;
  };

  const getNowPlayingTV = () => {
    if (tvInfo.nowPlayingShows)
      return tvInfo.nowPlayingShows.map((tvShow, idx) => (
        <InfoCardVertical
          key={idx}
          info={tvShow}
          onClick={() => setFeaturedTV(tvShow)}
        />
      ));
    else return [];
  };

  const getNowPlayingMovies = () => {
    if (movieInfo.nowPlayingShows)
      return movieInfo.nowPlayingShows.map((movie, idx) => (
        <InfoCardVertical
          key={idx}
          info={movie}
          onClick={() => setFeaturedMovie(movie)}
        />
      ));
    else return [];
  };

  const renderNowPlayingShows = () => {
    if (activeTab.name === TYPE_MOVIE)
      return <Slider title="Now Playing" items={getNowPlayingMovies()} />;
    else return <Slider title="Now Playing" items={getNowPlayingTV()} />;
  };

  return (
    <div className="content-section">
      <div className="inner-container" style={{ paddingBottom: "2vw" }}>
        <TabList
          tabs={TABS}
          activeTab={activeTab}
          onClick={(tab) => setActiveTab(tab)}
        />
        <FeaturedShowcard featuredShow={getFeaturedShow()} />
        {renderNowPlayingShows()}
      </div>
    </div>
  );
};

export default ContentSection;
