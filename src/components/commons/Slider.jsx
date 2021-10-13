import React from "react";
import ContentLoadingCardHorizontal from "./loaders/ContentLoadingCardHorizontal";

const Slider = (props) => {
  const { title = "Now Playing", items = [] } = props;

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

  const renderItems = () => {
    if (items.length === 0)
      return (
        <div className="slider-items-container">{renderLoadingContent()}</div>
      );
    else return null;
  };

  return (
    <div className="slider">
      {renderSliderHeader()}
      {renderItems()}
    </div>
  );
};

export default Slider;
