import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const FIVE_STAR_VALUES = [1, 2, 3, 4, 5];

const StarRating = ({ rating = 0 }) => {
  return (
    <div className="star-div">
      {FIVE_STAR_VALUES.map((starValue) =>
        starValue <= rating ? (
          <BsFillStarFill key={starValue} className="star" />
        ) : (
          <BsFillStarFill key={starValue} className="star star-grey" />
        )
      )}
    </div>
  );
};

export default StarRating;
