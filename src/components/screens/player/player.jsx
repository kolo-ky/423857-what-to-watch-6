import React, {useRef, useState} from 'react';
import {Redirect, useParams, useHistory} from "react-router-dom";

// redux
import {useSelector} from "react-redux";
import {filmSelector} from "../../../store/movies/selectors";

// routes
import {getRoute} from "../../../routes/routes";

// buttons
import Play from "./buttoms/play";
import FullScreen from "./buttoms/full-screen";
import Exit from "./buttoms/exit";

// utils
import {
  formatPlayerTime,
  onPlayerFullScreen,
  onPlayerPlayPause,
  onPlayerStop,
  getPlayerProgress,
  getPlayerRestTime
} from "../../../helpers/video-player-utils";

const Player = () => {
  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();
  const film = useSelector((state) => filmSelector(state, id));
  const [isPlaying, setPlay] = useState(false);
  const [progress, setProgress] = useState(`0`);
  const [elapsedTime, setElapsedTime] = useState(`0`);

  const handleTimeUpdate = () => {
    setProgress(getPlayerProgress(videoRef.current));
  };

  const handleOnPlaying = () => {
    setElapsedTime(formatPlayerTime(
        getPlayerRestTime(videoRef.current), videoRef.current.duration
    ));
  };

  const onFullScreen = () => {
    onPlayerFullScreen(videoRef.current);
  };

  const handleExit = () => {
    onPlayerStop(videoRef.current, film.video_link);
    history.push(getRoute(`film`, film.id));
  };

  const handleClick = () => {
    setPlay((prevState) => !prevState);
    onPlayerPlayPause(videoRef.current, isPlaying);
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

      <Exit clickToExit={handleExit}/>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsedTime}</div>
        </div>

        <div className="player__controls-row">

          <Play clickToPlay={handleClick} isPlaying={isPlaying}/>

          <div className="player__name">{film.title}</div>

          <FullScreen clickToFullScreen={onFullScreen}/>
        </div>
      </div>
    </div>
  );
};

export default Player;
