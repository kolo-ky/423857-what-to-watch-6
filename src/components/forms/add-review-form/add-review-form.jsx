import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

// api
import {addMovieCommentsApi} from "../../../api/comments";

// routes
import {getRoute} from "../../../routes/routes";

// const
const STARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddReviewForm = ({id}) => {
  const history = useHistory();
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    comment: ``,
  });

  const textSymbolCount = {
    min: 50,
    max: 400
  };

  const [isButtonActive, setButtonActive] = useState(false);
  const [disableForm, setDisableForm] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisableForm(true);
    addMovieCommentsApi(id, reviewForm).then(() => {
      history.push(getRoute(`film`, id));
    });
  };

  const handleChangeText = ({target}) => {
    if (target.value.length > textSymbolCount.max) {
      return;
    }

    setReviewForm({
      ...reviewForm,
      comment: target.value
    });

    if (target.value.length >= textSymbolCount.min) {
      setButtonActive(true);
    }
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
              STARS.map((star) => (
                <Fragment key={`$star-fragment-${star}`}>
                  <input
                    key={`$input-${star}`}
                    className="rating__input"
                    id={`star-${star}`}
                    type="radio"
                    name="rating"
                    checked={reviewForm.rating >= star}
                    onChange={(evt) => evt.preventDefault()}
                    disabled={disableForm}
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
            placeholder="Review text" value={reviewForm.comment} onChange={handleChangeText} disabled={disableForm}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isButtonActive || disableForm}>Post</button>
          </div>

        </div>
      </form>
      <span className="add-review__textarea">
        <b>Note:</b> minimum number of characters in a message 50, maximum 400
      </span>
    </div>
  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  submitForm: PropTypes.func
};

export default AddReviewForm;
