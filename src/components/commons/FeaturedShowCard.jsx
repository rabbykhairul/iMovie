import React from "react";
import AddToWishlistButton from "./AddToWishlistButton";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";
import WatchNowButton from "./WatchNowButton";

const FeaturedShowCard = ({ featuredShow }) => {
  const {
    title = "",
    genres = [],
    latestSeason = "Season 10",
  } = featuredShow || {};

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
    <div className="featured-content-card">
      {!featuredShow && renderLoading()}
      {featuredShow && renderFeaturedShowInfo()}
    </div>
  );
};

export default FeaturedShowCard;
