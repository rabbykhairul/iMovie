import React from "react";
import { WIDTH_92, buildImageURL } from "../../utils/URLBuilder";
import StarRating from "./StarRating";

const RecommendationCard = (props) => {
  const { title, label, genres, rating, poster_path: posterPath } = props.info;

  const renderImage = () => (
    <div className="image-section">
      <img src={buildImageURL(posterPath, WIDTH_92)} alt="" />
    </div>
  );

  const renderInfo = () => (
    <div className="info-section">
      <div className="info-header">
        <h3 className="info-title">{title}</h3>
        <p>{label}</p>
      </div>
      <p>{genres.join(", ")}</p>
      <StarRating rating={rating} />
    </div>
  );

  return (
    <div className="recommendation-card">
      {renderImage()}
      {renderInfo()}
    </div>
  );
};

export default RecommendationCard;
