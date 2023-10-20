import React, { useState, useContext, useEffect, useReducer, useRef } from "react";
import "./AsideBottom.css";
import { IoIosPause } from "react-icons/io";
import { RiRepeatLine } from "react-icons/ri";
import { RiRepeatOneFill } from "react-icons/ri";
import { HiPlay } from "react-icons/hi2";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { PiShuffleBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { GrExpand } from "react-icons/gr";
import { BsArrowsAngleContract } from "react-icons/bs";
// import {BsArrowsAngleExpand} from 'react-icons/bs'
import defaultSong from "../song/DefaultAudio.mp3";

import useSound from "use-sound";
import { JiosaavnContext } from "../App/App";
import ExpandAlbum from "./ExpandAlbum";
import { useNavigate } from "react-router-dom";

function AsideBottom() {

  const { songData, isExpand, setIsExpand } = useContext(JiosaavnContext);

  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isVolume, setIsVolume] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);

  const [localSongData, setLocalSongData] = useState(null);
  const [songUrl, setSongUrl] = useState(defaultSong);

  const [play, { stop, pause, duration , sound}] = useSound(songUrl);

  const timerId = useRef(null)

  const initialDuration = {
    currMin: 0,
    currSec: 0,
    totalMin: 0,
    totalSec: 0,
    totalDuration: 0,
  };

  const durationReducer = (state, action) => {
    switch (action.type) {
      case "currMin":
        return { ...state, currMin: action.payload };
      case "currSec":
        return { ...state, currSec: action.payload };
      case "totalMin":
        return { ...state, totalMin: action.payload };
      case "totalSec":
        return { ...state, totalSec: action.payload };
      case "totalDuration":
        return {
          ...state,
          totalDuration: action.payload === 0 ? 0 : state.totalDuration + 1,
        };
      default:
        return state;
    }
  };
  
  const [durationState, durationDispatch] = useReducer(
    durationReducer,
    initialDuration
  );

  useEffect(() => {
    // setSongUrl(defaultSong);
    if (songData.length > 0) {
      fetch(`https://academics.newtonschool.co/api/v1/music/song/${songData}`, {
        headers: {
          projectId: "nwi12vygvqne",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setLocalSongData(result.data);
          // clearTimeout(timerId.current)
          setSongUrl(result.data.audio_url);
          // durationDispatch({
          //   type: "totalDuration",
          //   payload: 0,
          // });
          
        });
    }
  }, [songData]);

  useEffect(()=>{
    if(localSongData?._id === songData){
      // stop the current song then play the same song if the song id is same
      
      clearTimeout(timerId.current)
      stop()
      setIsPlay(true)
      play()
      
      console.log('same song id')
    }
    else if(localSongData?._id !== songData){
      
      clearTimeout(timerId.current)
      stop();

      console.log('diff song id')  
    }

  },[songData])

  useEffect(() => {
    if (localSongData && duration > 150) {
      if (duration > 60000) {
        let min = Math.ceil(duration / 60000);
        let sec = duration / 1000 - Math.ceil(duration / 60000) * 60;
        durationDispatch({
          type: "totalMin",
          payload: min,
        });
        durationDispatch({
          type: "totalSec",
          payload: sec,
        });
      } else {
        let sec = Math.ceil(duration / 1000);
        durationDispatch({
          type: "totalSec",
          payload: sec,
        });
      }
      setIsPlay(true)
      play();
    }
  }, [duration]);

  useEffect(()=>{
    
    if (isPlay) {
      setProgressWidth(
        Math.floor(
          (durationState.totalDuration / Math.ceil(duration / 1000)) * 100
        )
      );
    }

    if (durationState.totalDuration > 60) {
      let min = Math.floor(durationState.totalDuration / 60);
      let sec =
        durationState.totalDuration -
        Math.floor(durationState.totalDuration / 60) * 60;
      durationDispatch({
        type: "currMin",
        payload: min,
      });
      durationDispatch({
        type: "currSec",
        payload: sec,
      });
    } 
    else {
      let sec = Math.floor(durationState.totalDuration);
      durationDispatch({
        type: "currSec",
        payload: sec,
      });
    }

  },[durationState.totalDuration])


  useEffect(() => {
    console.log('useEffect called')

    timerId.current = setTimeout(() => {
      if (isPlay && duration) {
        durationDispatch({
          type: "totalDuration",
        });
        console.log('setTimeOut called')
      }
    }, [1000])


    if(!isPlay || !songData){
      clearTimeout(timerId.current);
      return
    }
  
    if (Math.ceil(duration / 1000) === durationState.totalDuration) {
      clearTimeout(timerId.current);
      setIsPlay(false)

      durationDispatch({
        type: "totalDuration",
        payload: 0,
      });

      setProgressWidth(0);
    }
  
  }, [durationState.totalDuration, isPlay, duration , songData]);


  useEffect(() => {
    // when the routing changes the expand should go away
    if (isExpand) {
      setIsExpand(false);
    }
  }, [window.location.pathname]);


  const handleActions = (e) => {
    if (
      e.target.classList.contains("expand-album") ||
      e.target.parentElement.classList.contains("expand-album")
    ) {
      if (localSongData !== null) {
        setIsExpand(true);
      }
    } else if (
      e.target.classList.contains("contract-album") ||
      e.target.parentElement.classList.contains("contract-album")
    ) {
      setIsExpand(false);
    }
  };
  
  const handleClick = (e) => {
    navigate(`/${e.type || "artist"}/${e.name || e.title}/${e._id}`);
  };
  
  
  const handleBottomControls = (e) => {
    if (
      e.target.classList.contains("aside-bottom-item-repeat") ||
      e.target.parentElement.classList.contains("aside-bottom-item-repeat") ||
      e.target.parentElement.parentElement.classList.contains(
        "aside-bottom-item-repeat"
      )
    ) {
        if (localSongData !== null) {
            if(sound._loop){
                setIsRepeat(false)
                sound.loop(false);
            }else{
                setIsRepeat(true)
                sound.loop(true);
            }
        }
  
    } 
    else if (e.target.classList.contains("aside-bottom-item-prev") ||
      e.target.parentElement.classList.contains("aside-bottom-item-prev") ||
      e.target.parentElement.parentElement.classList.contains("aside-bottom-item-prev")) 
    {
      console.log("prev");
    } 
    else if (e.target.classList.contains("aside-bottom-item-play-pause") ||
      e.target.parentElement.classList.contains("aside-bottom-item-play-pause") ||
      e.target.parentElement.parentElement.classList.contains("aside-bottom-item-play-pause")) 
    {
      console.log("play-pause");
      if (!isPlay) {
        setIsPlay(true);
        play();  
      } else {
        setIsPlay(false);
        pause(); 
      }
    } 
    else if (
      e.target.classList.contains("aside-bottom-item-next") ||
      e.target.parentElement.classList.contains("aside-bottom-item-next") ||
      e.target.parentElement.parentElement.classList.contains("aside-bottom-item-next")) 
    {
      console.log("next");
    } else if (
      e.target.classList.contains("aside-bottom-item-shuffle") ||
      e.target.parentElement.classList.contains("aside-bottom-item-shuffle") ||
      e.target.parentElement.parentElement.classList.contains("aside-bottom-item-shuffle")) 
    {
      console.log("shuffle");
    }
  };


  return (
    <div
      id="aside-bottom"
      className="aside-bottom-section"
      style={{ top: isExpand && "64px", height: isExpand && "91%" }}
    >
      {isExpand && <ExpandAlbum localSongData={localSongData} />}
      <div className="aside-bottom-progress-bar">
        <div
          className="aside-bottom-progress"
          style={{
            minWidth: "0",
            maxWidth: "100%",
            width: `${progressWidth}%`,
          }}
        ></div>
      </div>
      <div
        className="aside-bottom-content"
        style={{ opacity: localSongData === null && "0.5" }}
      >
        <div className="aside-bottom-album">
          {!isExpand && (
            <>
              <img
                className="aside-bottom-img"
                src={localSongData?.thumbnail}
                alt={localSongData?.title}
                style={{ cursor: localSongData && "pointer" }}
                onClick={() => handleClick(localSongData)}
              ></img>
              <div className="aside-bottom-album-info">
                <h4
                  className="aside-bottom-album-title"
                  style={{
                    color: isHover ? "black" : "#3e3e3e",
                    cursor: localSongData && "pointer",
                  }}
                  onClick={() => handleClick(localSongData)}
                >
                  {localSongData?.title}
                </h4>
                <p className="aside-bottom-album-artist">
                  {localSongData?.artist &&
                    localSongData?.artist.map((e, idx) => (
                      <span
                        key={e._id}
                        onClick={() => handleClick(e)}
                        style={{ cursor: localSongData && "pointer" }}
                      >
                        {e.name +
                          `${
                            idx < localSongData.artist.length - 1 ? ", " : ""
                          }`}
                      </span>
                    ))}
                </p>
              </div>
            </>
          )}
        </div>
        <ul
          className="aside-bottom-controls"
          onClick={(e) => handleBottomControls(e)}
        >
          <li
            className="aside-bottom-item-repeat"
            style={{ cursor: localSongData && "pointer" , color: isRepeat && '#2bc5b4'}}
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
        <ul className="aside-bottom-actions" onClick={(e) => handleActions(e)}>
          <li
            className="aside-btm-item duration"
            style={{ cursor: localSongData ? "pointer" : "default" }}
          >
            <span id="real-time-duration">{`${
              durationState.currMin > 9
                ? durationState.currMin
                : "0" + durationState.currMin
            }:${
              durationState.currSec > 9
                ? durationState.currSec
                : "0" + durationState.currSec
            }`}</span>{" "}
            /{" "}
            <span id="total-duration">{`${
              durationState.totalMin > 9
                ? durationState.totalMin
                : "0" + durationState.totalMin
            }:${
              durationState.totalSec > 9
                ? durationState.totalSec
                : "0" + durationState.totalSec
            }`}</span>
          </li>
          <li
            className="aside-btm-item more-info"
            style={{ cursor: localSongData && "pointer" }}
          >
            <BsThreeDots />
          </li>
          <li
            className="aside-btm-item volume"
            style={{ cursor: localSongData && "pointer" }}
          >
            {isVolume ? <MdVolumeUp /> : <MdVolumeOff />}
          </li>
          <li
            className="aside-btm-item expand"
            style={{ cursor: localSongData && "pointer" }}
          >
            {isExpand ? (
              <BsArrowsAngleContract className="contract-album" />
            ) : (
              <GrExpand className="expand-album" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AsideBottom;
