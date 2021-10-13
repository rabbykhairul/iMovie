import React, { useState } from "react";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";

const Slider = (props) => {
  const { title = "Now Playing", items = [], itemsPerSlide = 4 } = props;

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const renderSliderHeader = () => {
    return (
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
      </div>
    );
  };

  const renderLoadingContent = () => {
    return (
      <>
        <ContentLoadingCardHorizontal className="content-loading-card-vertical" />
        <ContentLoadingCardHorizontal className="content-loading-card-vertical" />
        <ContentLoadingCardHorizontal className="content-loading-card-vertical" />
      </>
    );
  };

  const getItemsForCurrentSlide = () => {
    const startIdx = activeSlideIdx * itemsPerSlide;
    const endIdx = startIdx + itemsPerSlide;

    return items.slice(startIdx, endIdx);
  };

  const renderItems = () => {
    if (items.length === 0)
      return (
        <div className="slider-items-container">{renderLoadingContent()}</div>
      );
    else
      return (
        <div className="slider-items-container">
          {getItemsForCurrentSlide()}
        </div>
      );
  };

  return (
    <div className="slider">
      {renderSliderHeader()}
      {renderItems()}
    </div>
  );
};

export default Slider;
