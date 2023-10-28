import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import "./AsideBottom.css";
import defaultSong from "../song/DefaultAudio.mp3";

import useSound from "use-sound";
import { JiosaavnContext } from "../App/App";
import ExpandAlbum from "./ExpandAlbum";
import AsideBottomControls from "./AsideBottomControls";
import AsideBottomActions from "./AsideBottomActions";
import AsideBottomAlbum from "./AsideBottomAlbum";

function AsideBottom() {
  const { songId, isExpand } = useContext(JiosaavnContext);

  const [isPlay, setIsPlay] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const [localSongData, setLocalSongData] = useState(null);
  const [songUrl, setSongUrl] = useState(defaultSong);

  const [play, { stop, pause, duration, sound }] = useSound(songUrl);
  const [timerId, setTimerId] = useState(null);

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

  async function fetchSongData() {

    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/music/song/${songId}`,
        {
          headers: {
            projectId: "nwi12vygvqne",
          },
        }
      );

      const result = await response.json();

      setLocalSongData(result.data);
      setSongUrl(result.data.audio_url);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // setProgressWidth(0);

    console.log('useEffect Called')

    if (localSongData?._id === songId) {
      console.log('localSongData',localSongData ,'songId', songId)
      // stop the current song then play the same song if the song id is same

      clearTimeout(timerId);
      stop();
      durationDispatch({
        type: "totalDuration",
        payload: 0,
      });
      setIsPlay(true);
      play();


    } 
    else if (songId) {
      console.log('localSongData',localSongData ,'songId', songId)

      if (localSongData && localSongData?._id !== songId) {
        clearTimeout(timerId);
        stop();
        durationDispatch({
          type: "totalDuration",
          payload: 0,
        });
        fetchSongData();

      }

      fetchSongData();

    }
  }, [songId]);

  const convertDuration = useCallback((durationMs)=>{
    const totalSec = Math.ceil(durationMs / 1000)
    const min = Math.floor(totalSec / 60)
    const sec = totalSec % 60

    return {
      min, 
      sec,
    }

  },[])

  useEffect(() => {

    if (localSongData && duration > 150) {

      const dur = convertDuration(duration)

      durationDispatch({
        type: "totalMin",
        payload: dur.min,
      });
      durationDispatch({
        type: "totalSec",
        payload: dur.sec,
      });

      if(timerId){
        clearTimeout(timerId)
      }

      setIsPlay(true);
      play();

    }
  }, [duration]);

  useEffect(() => {
    if (isPlay) {
      setProgressWidth(
        Math.floor(
          (durationState.totalDuration / Math.ceil(duration / 1000)) * 100
        )
      );
    }else{
      setProgressWidth(0)
    }

    if (durationState.totalDuration >= 60) {
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
    } else {
      // let sec = Math.floor(durationState.totalDuration);
      durationDispatch({
        type: "currSec",
        payload: durationState.totalDuration,
      });
    }

  }, [durationState.totalDuration]);

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
        <AsideBottomControls
          songId={songId}
          localSongData={localSongData}
          isPlay={isPlay}
          setIsPlay={setIsPlay}
          play={play}
          pause={pause}
          sound={sound}
          duration={duration}
          timerId={timerId}
          setTimerId={setTimerId}
          durationState={durationState}
          durationDispatch={durationDispatch}
          setProgressWidth={setProgressWidth}
        />
        <AsideBottomActions
          localSongData={localSongData}
          durationState={durationState}
        />
      </div>
    </div>
  );
}

export default AsideBottom;
