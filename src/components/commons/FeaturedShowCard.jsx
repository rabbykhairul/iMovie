import React, { createRef, useEffect } from "react";
import { buildImageURL, WIDTH_1280 } from "../../utils/URLBuilder";
import AddToWishlistButton from "./AddToWishlistButton";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";
import WatchNowButton from "./WatchNowButton";

let timer = null;

const FeaturedShowCard = ({ featuredShow }) => {
  const {
    title = "",
    genres = [],
    latestSeason = "Season 10",
    backdrop_path,
  } = featuredShow || {};

  const featuredCardRef = createRef(null);

  useEffect(() => {
    clearTimeout(timer);
    featuredCardRef?.current?.classList.add("swing-in-top-bck");
    timer = setTimeout(
      () => featuredCardRef?.current?.classList.remove("swing-in-top-bck"),
      500
    );
  }, [featuredShow]);

  const renderLoading = () => <ContentLoadingCardHorizontal />;

  const renderSeason = () => {
    if (latestSeason)
      return (
        <p className="featured-show-season">{latestSeason.toUpperCase()}</p>
      );
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
