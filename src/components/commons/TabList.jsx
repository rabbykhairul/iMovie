import React from "react";
import Button from "./Button";

const TAB_ITEM_CLASSES = "tab-item text-primary";
const ACTIVE_TAB_CLASS = "tab-active";

const TabList = (props) => {
  const { tabs, activeTab, onClick } = props;

  return (
    <nav className="tab-list">
      {tabs.map((tab, idx) => (
        <Button
          key={idx}
          className={`${TAB_ITEM_CLASSES} ${
            tab.name === activeTab.name ? ACTIVE_TAB_CLASS : ""
          }`}
          onClick={() => onClick(tab)}
        >
          {tab.title}
        </Button>
      ))}
    </nav>
  );
};

export default TabList;
