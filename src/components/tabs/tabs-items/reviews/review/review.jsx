import React from 'react';
import PropTypes from 'prop-types';

// helper
import getDate from "../../../../../helpers/get-date";
import reviewTypes from "../../../../../types/review-types";

const Review = ({reviews}) => {
  return (
    <div className="movie-card__reviews-col">
      {
        reviews.map((review) => {
          return (
            <div className="review" key={`$review-key-${review.id}`}>
              <blockquote className="review__quote">
                <p className="review__text">
                  {review.comment}
                </p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{getDate(review.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })
      }
    </div>
  );
};

Review.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewTypes)
  )
};

export default Review;
