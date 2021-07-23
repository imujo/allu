import React, { useEffect, useRef, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { startTimer, onPlay } from "../../State/AudioFunctions";
import { fetchPostClick, fetchCategory } from "../../State/StateFunctions";
import AudioTimeline from "./AudioTimeline";

function ListenArticle({ title, oneLiner, categoryname, id, audiofile }) {
  const type = "listen";

  const history = useHistory();

  const redirectToArticle = () => {
    fetchPostClick(type, id, {});
    history.push(`/article/${type}/${id}/${audiofile}/${trackProgress}`);
  };
  const [hover, setHover] = useState(0);

  const [isPlaying, setisPlaying] = useState(false);
  const [time, setTime] = useState("00:00");
  const [trackPercentage, settrackPercentage] = useState(0);
  const [trackProgress, settrackProgress] = useState(0);

  const audioRef = useRef(
    new Audio(`${process.env.REACT_APP_SERVER_DOMAIN}/audio/${audiofile}`)
  );
  const intervalRef = useRef();
  const { duration } = audioRef.current;

  const [category, setCategory] = useState({});

  useEffect(() => {
    fetchCategory(setCategory, categoryname);

    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [categoryname]);

  return (
    <div className="articleDiv" hover={hover}>
      <img
        alt="articleImage"
        src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryImages/${category.imagefile}`}
        className="articleImage"
        onClick={() => redirectToArticle()}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
      />

      <div className="categoryImageFont articleCategory">{categoryname}</div>

      <div className="articleText">
        <div
          className="text"
          onClick={() => redirectToArticle()}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          <h6>{title}</h6>
          <div className="oneLinerFont oneLiner">{oneLiner}</div>
        </div>

        {isPlaying ? (
          <div className="playAudio">
            <BsFillPauseFill
              size="25px"
              color="#d5ccfd"
              onClick={() => {
                audioRef.current.pause();
                setisPlaying(false);
              }}
            />
          </div>
        ) : (
          <div className="playAudio">
            <BsFillPlayFill
              size="25px"
              color="#d5ccfd"
              onClick={() =>
                onPlay(
                  audioRef,
                  intervalRef,
                  setTime,
                  settrackProgress,
                  settrackPercentage,
                  setisPlaying,
                  startTimer
                )
              }
            />
          </div>
        )}
      </div>

      {isPlaying ? (
        <div className="audioTrack">
          <AudioTimeline
            time={time}
            setTime={setTime}
            trackProgress={trackProgress}
            settrackProgress={settrackProgress}
            trackPercentage={trackPercentage}
            settrackPercentage={settrackPercentage}
            isPlaying={isPlaying}
            setisPlaying={setisPlaying}
            intervalRef={intervalRef}
            audioRef={audioRef}
            duration={duration}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListenArticle;
