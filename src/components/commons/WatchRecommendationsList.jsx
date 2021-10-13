import React from "react";
import Button from "./Button";

import { BsThreeDots } from "react-icons/bs";
import RecommendationCard from "./RecommendationCard";

const WatchRecommendationsList = (props) => {
  const { title = "Recommended", items = [] } = props;

  const renderTitleSection = () => {
    return (
      <div className="watch-recommendation-title-section">
        <h3 className="text-primary recommendation-title">{title}</h3>
        <BsThreeDots className="text-primary" />
      </div>
    );
  };

  const renderRecommendedItems = () => {
    return items.map((item, idx) => <RecommendationCard key={idx} />);
  };

  const renderSeeMoreButton = () => <Button>See More</Button>;

  return (
    <div className="watch-recommendations-list">
      {renderTitleSection()}
      {renderRecommendedItems()}
      {renderSeeMoreButton()}
    </div>
  );
};

export default WatchRecommendationsList;
