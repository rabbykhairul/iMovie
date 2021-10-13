import React, { useContext } from "react";
import { TYPE_MOVIE, TYPE_TV } from "../services/tvAndMovieService";
import MovieContext from "../contexts/MovieContext";
import TVContext from "../contexts/TVContext";
import TabList from "./commons/TabList";

const TABS = [
  { title: "Movie", name: TYPE_MOVIE },
  { title: "TV Show", name: TYPE_TV },
];

const ContentSection = () => {
  const movieInfo = useContext(MovieContext);
  const tvInfo = useContext(TVContext);

  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="content-section">
      <TabList
        tabs={TABS}
        activeTab={activeTab}
        onClick={(tab) => setActiveTab(tab)}
      />
    </div>
  );
};

export default ContentSection;
