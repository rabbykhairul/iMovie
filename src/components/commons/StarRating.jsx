import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const StarRating = () => {
  return (
    <div className="star-div">
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
      <BsFillStarFill className="star" />
    </div>
  );
};

export default StarRating;
