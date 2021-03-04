export function breakTime(time = 0) {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  return [
    Math.floor(time / SECONDS_PER_HOUR),
    Math.floor((time % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE),
    Math.floor(time % SECONDS_PER_HOUR % SECONDS_PER_MINUTE),
  ];
}

export function formatPlayerTime(time = 0, totalTime = 0) {
  const timeParts = breakTime(time);
  const totalTimeParts = breakTime(totalTime);
  const outputParts = [];

  for (let index = 0; index < timeParts.length; index++) {
    if (totalTimeParts[index]) {
      const hasPrevTimePart = totalTimeParts[index - 1];
      const part = hasPrevTimePart
        ? `${timeParts[index]}`.padStart(2, `0`)
        : timeParts[index];

      outputParts.push(part);
    }
  }

  return outputParts.join(`:`);
}

export const onPlayerFullScreen = (video) => {
  if (video && !document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }
};

export const onPlayerStop = (video, link) => {
  video.pause();
  video.currentTime = 0;
  video.src = link;
};

export const onPlayerPlayPause = (video, isPlaying) => {
  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }
};

export const getPlayerProgress = (video) => {
  let progressTime = (video.currentTime / video.duration) * 100;
  return progressTime.toFixed(2);
};

export const getPlayerRestTime = (video) => {
  return video.duration - video.currentTime;
};
