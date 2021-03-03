import React, {useRef, useState} from 'react';
import {Redirect, useParams, useHistory} from "react-router-dom";

// redux
import {useSelector} from "react-redux";
import {filmSelector} from "../../../store/movies/selectors";

// routes
import {getRoute} from "../../../routes/routes";

// utils
import {formatPlayerTime} from "../../../helpers/video-player-utils";

const Player = () => {
  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();
  const film = useSelector((state) => filmSelector(state, id));
  const [isPlaying, setPlay] = useState(false);
  const [progress, setProgress] = useState(`0`);
  const [elapsedTime, setElapsedTime] = useState(`0`);
  const button = {play: `#play-s`, pause: `#pause`};

  const handleTimeUpdate = () => {
    let progressTime = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progressTime.toFixed(2));
  };

  const handleOnPlaying = () => {
    setElapsedTime(formatPlayerTime(
        videoRef.current.duration - videoRef.current.currentTime, videoRef.current.duration
    ));
  };

  const onPlayerFullScreen = () => {
    if (videoRef.current && !document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleExit = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.src = film.video_link;

    history.push(getRoute(`film`, film.id));
  };

  const handleClick = () => {
    setPlay((prevState)=> !prevState);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  if (!film) {
    return <Redirect to={getRoute(`home`)}/>;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.video_link}
        muted={false}
        className="player__video"
        poster={film.poster_image}
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleOnPlaying}
      />

      <button type="button" className="player__exit" onClick={handleExit}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsedTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? button.pause : button.play} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.title}</div>

          <button type="button" className="player__full-screen" onClick={onPlayerFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
