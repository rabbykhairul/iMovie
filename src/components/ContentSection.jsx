import React, { useContext, useState } from "react";
import { TYPE_MOVIE, TYPE_TV } from "../services/tvAndMovieService";
import MovieContext from "../contexts/MovieContext";
import TVContext from "../contexts/TVContext";
import TabList from "./commons/TabList";
import FeaturedShowcard from "./commons/FeaturedShowCard";

const TABS = [
  { title: "Movie", name: TYPE_MOVIE },
  { title: "TV Show", name: TYPE_TV },
];

const ContentSection = () => {
  const movieInfo = useContext(MovieContext);
  const tvInfo = useContext(TVContext);

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const getFeaturedShow = () => {
    if (activeTab.name === TYPE_MOVIE) return movieInfo.featuredShow;
    else return tvInfo.featuredShow;
  };

  return (
    <div className="content-section">
      <TabList
        tabs={TABS}
        activeTab={activeTab}
        onClick={(tab) => setActiveTab(tab)}
      />
      <FeaturedShowcard featuredShow={getFeaturedShow()} />
    </div>
  );
};

export default ContentSection;
