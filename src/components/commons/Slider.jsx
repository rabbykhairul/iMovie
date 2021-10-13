import React, { useState } from "react";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Slider = (props) => {
  const { title = "Now Playing", items = [], itemsPerSlide = 4 } = props;

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const updateActiveSlideIdx = (direction) => {
    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    let newSlideIdx = activeSlideIdx + direction;
    if (newSlideIdx < 0) newSlideIdx = totalSlides - 1;
    else if (newSlideIdx === totalSlides) newSlideIdx = 0;

    setActiveSlideIdx(newSlideIdx);
  };

  const renderSliderHeader = () => {
    return (
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
        <div>
          <BsArrowLeftCircle
            className="slider-control"
            onClick={() => updateActiveSlideIdx(-1)}
          />
          <BsArrowRightCircle
            className="slider-control"
            onClick={() => updateActiveSlideIdx(1)}
          />
        </div>
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
