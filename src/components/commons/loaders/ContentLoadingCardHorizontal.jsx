import React from "react";

const ContentLoadingCardHorizontal = ({ className }) => {
  return (
    <div className={`content-loading-card-horizontal ${className}`}>
      <div className="line line-sm"></div>
      <div className="line line-lg"></div>
      <div className="line line-md"></div>
    </div>
  );
};

export default ContentLoadingCardHorizontal;
