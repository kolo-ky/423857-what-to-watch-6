import React, {useState} from 'react';
import PropTypes from 'prop-types';

// components
import TabsControl from './tabs-control/tabs-control';
import OverView from "./tabs-items/overview/overview";
import Details from "./tabs-items/details/details";
import Reviews from "./tabs-items/reviews/reviews";

// proxy
import TabsContentProxy from './tabs-content-proxy/tabs-content-proxy';

// mocha
import reviews from '../../mocks/reviews';

// types
import filmType from '../../types/film-type';

const tabsItems = {
  overview: {
    title: `Overview`,
    propKey: `film`,
    component: OverView,
  },
  details: {
    title: `Details`,
    propKey: `film`,
    component: Details,
  },
  reviews: {
    title: `Reviews`,
    propKey: `reviews`,
    component: Reviews,
  }
};

const Tabs = ({film}) => {
  const [activeTab, updateTab] = useState(`overview`);

  const handleSetActiveTab = (tab) => {
    updateTab(tab);
  };

  return (
    <div className="movie-card__desc">
      <TabsControl tabs={tabsItems} activeTab={activeTab} onSetActiveTab={handleSetActiveTab} />
      <TabsContentProxy tabs={tabsItems} activeTab={activeTab} film={film} reviews={reviews}/>
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(filmType)
};

export default Tabs;
