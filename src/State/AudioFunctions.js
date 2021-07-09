export const currentTimeToTime = (audioRef) => {
  const currentTime = parseInt(audioRef.current.currentTime);
  const minutes = parseInt(currentTime / 60);
  const seconds = parseInt(currentTime % 60);
  const returningSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const returningMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${returningMinutes}:${returningSeconds}`;
  return time;
};

export const currentTimeToPercentage = (audioRef) => {
  const trackPercenrage =
    (audioRef.current.currentTime / audioRef.current.duration) * 100;
  return trackPercenrage;
};

export const onScrub = (
  value,
  intervalRef,
  audioRef,
  setTime,
  settrackPercentage,
  settrackProgress
) => {
  clearInterval(intervalRef.current);
  audioRef.current.currentTime = value;

  settrackPercentage(currentTimeToPercentage(audioRef));
  settrackProgress(audioRef.current.currentTime);
  setTime(currentTimeToTime(audioRef, setTime));
};

export const onScrubEnd = (
  isPlaying,
  setisPlaying,
  intervalRef,
  audioRef,
  setTime,
  settrackProgress,
  settrackPercentage
) => {
  if (!isPlaying) {
    setisPlaying(true);
  }
  startTimer(
    intervalRef,
    audioRef,
    setisPlaying,
    setTime,
    settrackProgress,
    settrackPercentage
  );
};

export const startTimer = (
  intervalRef,
  audioRef,
  setisPlaying,
  setTime,
  settrackProgress,
  settrackPercentage
) => {
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    if (audioRef.current.ended) {
      setisPlaying(false);
    } else {
      setTime(currentTimeToTime(audioRef));
      settrackProgress(audioRef.current.currentTime);
      settrackPercentage(currentTimeToPercentage(audioRef));
    }
  }, [1000]);
};

export const onPlay = (
  audioRef,
  intervalRef,
  setTime,
  settrackProgress,
  settrackPercentage,
  setisPlaying,
  startTimer
) => {
  audioRef.current
    .play()
    .then(console.log("play"))
    .catch((e) => console.log(e));
  setisPlaying(true);
  startTimer(
    intervalRef,
    audioRef,
    setisPlaying,
    setTime,
    settrackProgress,
    settrackPercentage
  );
};
