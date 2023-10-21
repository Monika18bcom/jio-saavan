import React, { useState, useContext, useEffect, useReducer, useRef } from "react";
import "./AsideBottom.css";
// import {BsArrowsAngleExpand} from 'react-icons/bs'
import defaultSong from "../song/DefaultAudio.mp3";

import useSound from "use-sound";
import { JiosaavnContext } from "../App/App";
import ExpandAlbum from "./ExpandAlbum";
import AsideBottomControls from "./AsideBottomControls";
import AsideBottomActions from "./AsideBottomActions";
import AsideBottomAlbum from "./AsideBottomAlbum";

function AsideBottom() {

  const { songData, isExpand } = useContext(JiosaavnContext);


  const [isHover, setIsHover] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
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

  async function fetchSongData(){

    console.log('fetch called')

    const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song/${songData}`, {
      headers: {
        projectId: "nwi12vygvqne",
      },
    })

    const result = await response.json()

    setLocalSongData(result.data);
    setSongUrl(result.data.audio_url);

  }

  useEffect(()=>{
    console.log('song url changed')
    setProgressWidth(0)

    clearTimeout(timerId.current)

  },[songUrl])

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
      // console.log('diff song id','localSongData._id ' , localSongData  ,'songData', songData)

      if(localSongData){
        console.log('second time')
        clearTimeout(timerId.current)
        stop();
      }
      
      if (songData.length > 0) {
        fetchSongData()
      }
     
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

    console.log('progress bar use effect')
    
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
    // console.log('useEffect called')

    timerId.current = setTimeout(() => {
      if (isPlay && duration) {
        durationDispatch({
          type: "totalDuration",
        });
        // console.log('setTimeOut called')
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
        <AsideBottomAlbum localSongData={localSongData} />
        <AsideBottomControls localSongData={localSongData} durationState={durationState} />
        <AsideBottomActions localSongData={localSongData} isPlay={isPlay} setIsPlay={setIsPlay} play={play} pause={pause} sound={sound} />
      </div>
    </div>
  );
}

export default AsideBottom;
