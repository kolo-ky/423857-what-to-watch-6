import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({poster, video}) => {
  const videoRef = useRef();
  let timerId;

  const handleMouseEnter = () => {
    timerId = setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerId);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.src = video;
  };

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={false}
        width="280"
        height="175"
        muted={true}
      >
        <source type='video/mp4' src={video}/>
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
