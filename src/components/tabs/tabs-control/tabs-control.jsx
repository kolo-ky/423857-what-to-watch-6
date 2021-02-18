import React from 'react';
import PropTypes from "prop-types";

// types
import tabsType from "../../../types/tabs-types";


const TabsControl = ({tabs, onSetActiveTab}) => {
  const setActiveTab = (event, activeTab) => {
    event.preventDefault();
    onSetActiveTab(activeTab);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          Object.keys(tabs.items).map((tab) => {
            return (
              <li
                key={`$tab-key-${tab}`}
                className={`movie-nav__item ${tabs.active === tab && `movie-nav__item--active`}`}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(event) => setActiveTab(event, tab)}
                >
                  {tabs.items[tab].title}
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

TabsControl.propTypes = {
  tabs: PropTypes.shape(tabsType),
  onSetActiveTab: PropTypes.func.isRequired
};

export default TabsControl;
