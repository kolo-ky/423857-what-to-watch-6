import React from 'react';
import PropsTypes from 'prop-types';

const FullScreen = ({clickToFullScreen}) => {
  return (
    <button type="button" className="player__full-screen" onClick={clickToFullScreen}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
};

FullScreen.propTypes = {
  clickToFullScreen: PropsTypes.func
};

export default FullScreen;
