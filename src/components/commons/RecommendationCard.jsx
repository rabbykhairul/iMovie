import React, { useEffect, useState } from "react";
import {
  getMovieContentRating,
  getTVContentRating,
  TYPE_MOVIE,
} from "../../services/tvAndMovieService";
import { WIDTH_92, buildImageURL } from "../../utils/URLBuilder";
import StarRating from "./StarRating";

const RecommendationCard = (props) => {
  const {
    id,
    title,
    genres,
    rating,
    type,
    poster_path: posterPath,
  } = props.info;

  const [contentRating, setContentRating] = useState("");

  // eslint-disable-next-line
  useEffect(() => loadContentRating(), []);

  const loadContentRating = async () => {
    let contentRating = "";
    if (type === TYPE_MOVIE) contentRating = await getMovieContentRating(id);
    else contentRating = await getTVContentRating(id);
    setContentRating(contentRating);
  };

  const renderImage = () => (
    <div className="image-section">
      <img src={buildImageURL(posterPath, WIDTH_92)} alt="" />
    </div>
  );

  const renderInfo = () => (
    <div className="info-section">
      <div className="info-header">
        <h3 className="info-title">{title}</h3>
        <p>{contentRating}</p>
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
