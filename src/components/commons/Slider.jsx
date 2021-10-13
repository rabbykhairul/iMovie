import React from "react";

const Slider = (props) => {
  const { title = "Now Playing", items = [] } = props;

  const renderSliderHeader = () => {
    return (
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
      </div>
    );
  };

  return <div className="slider">{renderSliderHeader()}</div>;
};

export default Slider;
