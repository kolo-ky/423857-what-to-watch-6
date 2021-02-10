import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const AddReviewForm = ({id}) => {
  const STARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    reviewText: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setReviewForm({
      rating: 0,
      reviewText: ``,
    });
  };

  const handleChangeText = ({target}) => {
    setReviewForm({
      ...reviewForm,
      reviewText: target.value
    });
  };

  const handleClick = (star) => {
    setReviewForm({
      ...reviewForm,
      rating: star
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              STARS.map((star, index) => (
                <Fragment key={`star-fragment-${index}`}>
                  <input
                    key={`$star-${star}`}
                    className="rating__input"
                    id={`star-${star}`}
                    type="radio" name="rating"
                    checked={reviewForm.rating >= star}
                    onChange={(evt) => evt.preventDefault()}
                  />
                  <label
                    key={`$label-${star}`}
                    className="rating__label"
                    htmlFor={`star-${star}`}
                    onClick={() => handleClick(star)}
                  >
                    Rating {star}
                  </label>
                </Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" value={reviewForm.reviewText} onChange={handleChangeText}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired
};

export default AddReviewForm;
