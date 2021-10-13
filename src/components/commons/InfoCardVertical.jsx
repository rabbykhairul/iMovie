import React from "react";
import { buildImageURL, WIDTH_342 } from "../../utils/URLBuilder";
import AddToWishlistButton from "./AddToWishlistButton";
import WatchNowButton from "./WatchNowButton";

const InfoCardVertical = ({ info, onClick = () => {} }) => {
  const { poster_path } = info;
  return (
    <div
      className="info-card-vertical"
      onClick={onClick}
      style={
        poster_path
          ? {
              backgroundImage: `url('${buildImageURL(
                poster_path,
                WIDTH_342
              )} ')`,
            }
          : {}
      }
    >
      <div className="info-overlay">
        <div className="action-1">
          <WatchNowButton />
        </div>
        <div className="action-2">
          <AddToWishlistButton />
        </div>
      </div>
    </div>
  );
};

export default InfoCardVertical;
