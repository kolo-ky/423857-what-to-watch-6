import React from 'react';
import PropTypes from 'prop-types';

// components
import Review from './review/review';

// types
import reviewTypes from '../../../../types/review-types';

const COLUMNS_COUNT = 2;

const Reviews = ({reviews}) => {
  const sliceSep = Math.ceil(reviews.length / COLUMNS_COUNT);
  const leftColumnReviews = reviews.slice(0, sliceSep);
  const rightColumnReviews = reviews.slice(sliceSep);

  return (
    <div className="movie-card__reviews movie-card__row">
      <Review reviews={leftColumnReviews}/>
      <Review reviews={rightColumnReviews}/>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewTypes)
  )
};

export default Reviews;
