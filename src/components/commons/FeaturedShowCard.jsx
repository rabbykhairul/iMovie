import React, { createRef, useEffect, useState } from "react";
import { getLatestSeason, TYPE_TV } from "../../services/tvAndMovieService";
import { buildImageURL, WIDTH_1280 } from "../../utils/URLBuilder";
import AddToWishlistButton from "./AddToWishlistButton";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";
import WatchNowButton from "./WatchNowButton";

let timer = null;

const FeaturedShowCard = ({ featuredShow }) => {
  const {
    id,
    title = "",
    genres = [],
    type,
    backdrop_path,
  } = featuredShow || {};

  const featuredCardRef = createRef(null);
  const [latestSeason, setLatestSeason] = useState("");

  useEffect(() => {
    clearTimeout(timer);
    featuredCardRef?.current?.classList.add("swing-in-top-bck");
    timer = setTimeout(
      () => featuredCardRef?.current?.classList.remove("swing-in-top-bck"),
      500
    );

    setLatestSeason("");
    if (type === TYPE_TV) loadLatestSeason();
    // eslint-disable-next-line
  }, [featuredShow]);

  const loadLatestSeason = async () => {
    const latestSeason = await getLatestSeason(id);
    setLatestSeason(latestSeason);
  };

  const renderLoading = () => <ContentLoadingCardHorizontal />;

  const renderSeason = () => {
    if (latestSeason)
      return <p className="featured-show-season">SEASON {latestSeason}</p>;
    else return null;
  };

  const renderTitle = () => <h2 className="featured-show-title">{title}</h2>;

  const renderGenres = () => (
    <p className="featured-show-genres">{genres.join(", ")}</p>
  );

  const renderButtons = () => {
    return (
      <div className="btn-row">
        <WatchNowButton />
        <AddToWishlistButton />
      </div>
    );
  };

  const renderFeaturedShowInfo = () => {
    return (
      <div className="featured-show-info">
        {renderSeason()}
        {renderTitle()}
        {renderGenres()}
        {renderButtons()}
      </div>
    );
  };

  return (
    <div
      ref={featuredCardRef}
      className="featured-content-card"
      style={
        featuredShow
          ? {
              backgroundImage: `url('${buildImageURL(
                backdrop_path,
                WIDTH_1280
              )}')`,
            }
          : {}
      }
    >
      {!featuredShow && renderLoading()}
      {featuredShow && renderFeaturedShowInfo()}
    </div>
  );
};

export default FeaturedShowCard;
