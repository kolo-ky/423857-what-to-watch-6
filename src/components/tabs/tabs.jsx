import React, {useState} from 'react';
import PropTypes from 'prop-types';

// components
import TabsControl from './tabs-control/tabs-control';
import OverView from "./tabs-items/overview/overview";
import Details from "./tabs-items/details/details";
import Reviews from "./tabs-items/reviews/reviews";

// proxy
import TabsContentProxy from './tabs-content-proxy/tabs-content-proxy';

// types
import filmType from '../../types/film-type';
import reviewTypes from '../../types/review-types';

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

const Tabs = ({film, reviews}) => {
  const [activeTab, updateTab] = useState(`overview`);

  const handleSetActiveTab = (tab) => {
    updateTab(tab);
  };

  return (
    <div className="movie-card__desc">
      <TabsControl tabs={tabsItems} activeTab={activeTab} onSetActiveTab={handleSetActiveTab} />
      <TabsContentProxy tabs={tabsItems} activeTab={activeTab} film={film} reviews={reviews} />
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(filmType),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewTypes)
  )
};

export default Tabs;
