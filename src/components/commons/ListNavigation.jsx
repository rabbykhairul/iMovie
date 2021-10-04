import React from "react";
import Button from "./Button";

const NAV_ITEM_CLASS = "nav-button text-primary";
const SELECTED_NAV_ITEM_CLASS = "nav-button-selected"

const ListNavigation = (props) => {
  const { title = "Menu", items = [], idOfSelectedItem = 1  } = props;

  return (
    <div className="list-nav">
      <h3 className="text-primary" >{title}</h3>
      
      {items.map((item, idx) => {
        const className = item.id === idOfSelectedItem ? `${NAV_ITEM_CLASS} ${SELECTED_NAV_ITEM_CLASS}` : NAV_ITEM_CLASS;
        return (
          <Button key={idx} className={className} >
            <item.icon className="nav-button-icon" />
            <span>{item.label}</span>
          </Button>
        )
      })}
    </div>
  );
};

export default ListNavigation;