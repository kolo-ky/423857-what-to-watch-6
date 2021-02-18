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
import filmType from '../../types/film-types';

const Tabs = ({film}) => {
  const [tabs, updateTabs] = useState({
    items: {
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
    },
    active: `overview`
  });

  const handleSetActiveTab = (active) => {
    updateTabs((prevState) => {
      return {
        ...prevState,
        active
      };
    });
  };

  return (
    <div className="movie-card__desc">
      <TabsControl tabs={tabs} onSetActiveTab={handleSetActiveTab} />
      <TabsContentProxy tabs={tabs} film={film} reviews={reviews}/>
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(filmType)
};

export default Tabs;
