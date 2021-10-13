import React from "react";
import StarRating from "./StarRating";

const RecommendationCard = (props) => {
  const { title, label, genres, rating } = props;

  const renderImage = () => <div className="image-section"></div>;

  const renderInfo = () => (
    <div className="info-section">
      <div className="info-header">
        <h3 className="info-title">{title}</h3>
        <p>{label}</p>
      </div>
      <p>{genres.join(", ")}</p>
      <StarRating />
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
