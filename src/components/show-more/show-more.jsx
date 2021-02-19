import React from "react";
import PropTypes from 'prop-types';

const ShowMore = ({sendClick}) => {
  const clickOnButton = () => {
    sendClick();
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={clickOnButton}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  sendClick: PropTypes.func.isRequired
};

export default ShowMore;
