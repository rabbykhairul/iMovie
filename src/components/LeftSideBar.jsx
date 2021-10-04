import React from "react";

import Header from "./commons/Header";
import ListNavigation from "./commons/ListNavigation";

import { MAIN_MENU, LIBRARY, CATEGORY, GENERAL } from "../utils/menuItems";

const LeftSideBar = () => {
  return (
    <nav className="left-side-bar">
      <Header />
      <div className="grouped-menu-container">
        <ListNavigation title={MAIN_MENU.title} items={MAIN_MENU.items} />
        <ListNavigation title={LIBRARY.title} items={LIBRARY.items} />
        <ListNavigation title={CATEGORY.title} items={CATEGORY.items} />
        <ListNavigation title={GENERAL.title} items={GENERAL.items} />
      </div>
    </nav>
  );
}

export default LeftSideBar;