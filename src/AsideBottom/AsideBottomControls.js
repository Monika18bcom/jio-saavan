import React, { useEffect, useState } from "react";
import { IoIosPause } from "react-icons/io";
import { RiRepeatLine } from "react-icons/ri";
import { RiRepeatOneFill } from "react-icons/ri";
import { HiPlay } from "react-icons/hi2";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { PiShuffleBold } from "react-icons/pi";

function AsideBottomControls({
  songId,
  localSongData,
  isPlay,
  setIsPlay,
  play,
  pause,
  sound,
  duration,
  timerId,
  setTimerId,
  durationState,
  durationDispatch,
  setProgressWidth,
}) {
  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {    
    if(isPlay && songId){
      setTimerId(
        setTimeout(() => {
          if (isPlay && duration) {
            durationDispatch({
              type: "totalDuration",
            });
          }
        }, 1000)
      );
    }
    else if (!isPlay || !songId) {
      clearTimeout(timerId);
      return;
    }
    else if (localSongData?._id  !== songId) {
      clearTimeout(timerId);
    }

    if (Math.ceil(duration / 1000) === durationState.totalDuration) {
      clearTimeout(timerId);
      setIsPlay(false);

      durationDispatch({
        type: "totalDuration",
        payload: 0,
      });

      setProgressWidth(0);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [durationState.totalDuration , isPlay , songId]);

  const handlePlay = () => {
    if (!isPlay) {
      setIsPlay(true);
      play();
    } else {
      setIsPlay(false);
      pause();
    }
  };

  const handleLoop = () => {
    // if (localSongData !== null) {
    //   if (sound._loop) {
    //     setIsRepeat(false);
    //     sound.loop(false);
    //   } else {
    //     setIsRepeat(true);
    //     sound.loop(true);
    //   }
    // }
  };

  return (
    <ul className="aside-bottom-controls">
      <li
        className="aside-bottom-item-repeat"
        style={{
          cursor: localSongData && "pointer",
          color: isRepeat && "#2bc5b4",
        }}
        onClick={handleLoop}
      >
        {/* {isRepeat === (1 || 2) ? <RiRepeatLine /> : <RiRepeatOneFill />} */}
        <RiRepeatLine />
      </li>
      <li
        className="aside-bottom-item-prev"
        style={{ cursor: localSongData && "pointer" }}
      >
        <TbPlayerSkipBackFilled />
      </li>
      <li
        className="aside-bottom-item-play-pause"
        style={{ cursor: localSongData && "pointer" }}
        onClick={handlePlay}
      >
        {!isPlay ? <HiPlay /> : <IoIosPause />}
      </li>
      <li
        className="aside-bottom-item-next"
        style={{ cursor: localSongData && "pointer" }}
      >
        <TbPlayerSkipForwardFilled />
      </li>
      <li
        className="aside-bottom-item-shuffle"
        style={{ cursor: localSongData && "pointer" }}
      >
        <PiShuffleBold />
      </li>
    </ul>
  );
}

export default AsideBottomControls;
