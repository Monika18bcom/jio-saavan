import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { GrExpand } from "react-icons/gr";
import { BsArrowsAngleContract } from "react-icons/bs";
import { JiosaavnContext } from '../App/App';
 
function AsideBottomActions({ localSongData , durationState }) {
  // console.log(durationState)

  const { isExpand, setIsExpand } = useContext(JiosaavnContext)
  const [isVolume, setIsVolume] = useState(true);


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
    

  return (
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
  )
}

export default AsideBottomActions