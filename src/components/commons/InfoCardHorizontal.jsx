import React from "react";
import { buildImageURL, WIDTH_780 } from "../../utils/URLBuilder";
import AddToWishlistButton from "./AddToWishlistButton";
import WatchNowButton from "./WatchNowButton";

const InfoCardHorizontal = ({ info, onClick = () => {} }) => {
  const { title, release_date, first_air_date, backdrop_path } = info;
  const releaseYear = (release_date || first_air_date).split("-")[0];
  return (
    <div
      className="info-card-horizontal"
      onClick={onClick}
      style={
        backdrop_path
          ? {
              backgroundImage: `url('${buildImageURL(
                backdrop_path,
                WIDTH_780
              )} ')`,
            }
          : {}
      }
    >
      <div className="info-overlay">
        <h3>
          {title} ({releaseYear})
        </h3>
      </div>
    </div>
  );
};

export default InfoCardHorizontal;
