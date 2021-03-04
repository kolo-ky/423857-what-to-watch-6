import React from 'react';
import PropsTypes from 'prop-types';

const Play = ({clickToPlay, isPlaying}) => {
  const buttonState = {
    play: {
      icon: `#play-s`,
      title: `Play`
    },
    pause: {
      icon: `#pause`,
      title: `Pause`
    },
  };

  return (
    <button type="button" className="player__play" onClick={clickToPlay}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={isPlaying ? buttonState.pause.icon : buttonState.play.icon} />
      </svg>
      <span>{isPlaying ? buttonState.pause.title : buttonState.play.title}</span>
    </button>
  );
};

Play.propTypes = {
  clickToPlay: PropsTypes.func,
  isPlaying: PropsTypes.bool
};

export default Play;
