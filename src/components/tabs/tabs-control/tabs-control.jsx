import React from 'react';
import PropTypes from "prop-types";

// types
import tabsType from "../../../types/tabs-types";


const TabsControl = ({tabs, activeTab, onSetActiveTab}) => {
  const setActiveTab = (event, tab) => {
    event.preventDefault();
    onSetActiveTab(tab);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          Object.keys(tabs).map((tab) => {
            return (
              <li
                key={`$tab-key-${tab}`}
                className={`movie-nav__item ${activeTab === tab && `movie-nav__item--active`}`}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(event) => setActiveTab(event, tab)}
                >
                  {tabs[tab].title}
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
  activeTab: PropTypes.string.isRequired,
  onSetActiveTab: PropTypes.func.isRequired
};

export default TabsControl;
