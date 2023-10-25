import React, { useCallback, useContext, useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import "./SongItem.css";
import { useNavigate } from "react-router-dom";
import { JiosaavnContext } from "../App/App";
import useSound from "use-sound";

import defaultSong from "../song/DefaultAudio.mp3";


function SongItem({
  data,
  songList,
  songNum,
  cancelIcon,
  likeIcon,
  durDots,
  songPoster,
  songInfo,
  imgMarginR,
  bg,
  borderR,
  border,
  width,
  height,
  playCur,
  titleCur,
  typeCur,
  songInfoFD,
  songInfoAI,
  songInfoJC,
  songInfoFSz,
  songInfoFCo,
  songInfoMarginR,
  songlistWidth,
  numMarginR,
  likeIconMarginR,
  num,
  artistArr
}) {

  const { setSearchOpen, setSongId } = useContext(JiosaavnContext);

  const [isHover, setIsHover] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  // border'1px solid #e9e9e9
  const navigate = useNavigate();

  const [ , { duration }] = useSound(data?.audio_url);

  const [dur , setsur] = useState({})  

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

    if (duration) {

      const d = convertDuration(duration)
      setsur(d)
    }
  }, [duration]);
  

  const handleClickAlbum = (e) => {

    if(songList){
      navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
    }
    else{
      navigate(
        `/${data.type ? "song" : data.artists ? "album" : "artist"}/${
          e.name || e.title
        }/${e._id}`
      );
    }
    
    if (!songList) {
      setSearchOpen(false);
    }
  };

  const setSongIdx = () => {
    setSongId(null);
    if (data.type === "song") {
      setSongId(data._id);
    } else if (data.songs.length > 0) {
      if (data.artists) {
        setSongId(data.songs[0]._id);
      } else {
        setSongId(data.songs[0]);
      }
    }
  };

  return (
    <div
      className="song-item-container"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      style={{
        height: height,
        width: width,
        backgroundColor: isHover && bg,
        borderRadius: isHover && borderR,
        border: isHover && border,
      }}
    >
      {songNum && (
        <div className="song-item-idx" style={{marginRight: numMarginR}}>
          {isHover && !songPoster ? (
            <BsPlayCircle
              className="play-icon"
              style={{
                cursor: playCur,
              }}
              onClick={setSongIdx}
            />
          ) : (
            <p>{num ? num + 1 : 1}</p>
          )}
        </div>
      )}
      {songPoster && (
        <div className="song-item-img" style={{ marginRight: imgMarginR }}>
          {isHover ? (
            <BsPlayCircle
              className="play-icon"
              style={{
                cursor: playCur,
                backgroundImage: `url(${
                  data.type ? data.thumbnail : data.image
                })`,
              }}
              onClick={setSongIdx}
            />
          ) : (
            <div
              className="img-bg"
              style={{
                backgroundImage: `url(${
                  data.type ? data.thumbnail : data.image
                })`,
              }}
            ></div>
          )}
        </div>
      )}
      {songInfo && (
        <div
          className="song-item-info"
          style={{
            flexDirection: songInfoFD,
            alignItems: songInfoAI,
            justifyContent: songInfoJC,
            fontSize: songInfoFSz,
            color: songInfoFCo,
            marginRight: songInfoMarginR
          }}
        >
          {songList ? (
            <>
              <h4
                className="song-info-title"
                style={{ cursor: titleCur , width: songlistWidth}}
                onClick={() => handleClickAlbum(data)}
              >
                {data.type ? data.title : data.artists ? data.title : data.name}
              </h4>
              <p className="song-info-type" style={{ cursor: typeCur , width: songlistWidth }}>
                {artistArr ?
                  artistArr?.name || 
                  artistArr?.artists.map((e , idx)=>{
                      if(data.artist.includes(e._id)){
                          return  <span key={e._id} onClick={()=>handleClickAlbum(e)}>{e.name + `${idx < (artistArr.artists.length -1) ? ", " : ""}`}</span>
                          // return `${e.name},`;
                      }
                  }) || 
                  data?.artist?.map((e , idx)=> (
                      <span key={e._id} onClick={()=>handleClickAlbum(e)}>{e.name + `${idx < (data.artist.length -1) ? ", " : ""}`}</span>
                  )) :
                
                  data?.artists?.map((e, idx) => {
                    if (data?.artist?.includes(e._id)) {
                      return (
                        <span key={e._id} onClick={() => handleClickAlbum(e)}>
                          {e.name +
                            `${idx < data.artists.length - 1 ? ", " : ""}`}
                        </span>
                      );
                    }
                  }) ||

                  data?.artist?.map((e, idx) => (
                    <span key={e._id} onClick={() => handleClickAlbum(e)}>
                      {e.name + `${idx < data.artist.length - 1 ? ", " : ""}`}
                    </span>
                  ))
                }
              </p>
            </>
          ) : (
            <>
              <h4
                className="song-info-title"
                style={{ cursor: titleCur }}
                onClick={() => handleClickAlbum(data)}
              >
                {data.type ? data.title : data.artists ? data.title : data.name}
              </h4>
              <p className="song-info-type" style={{ cursor: typeCur }}>
                {data.type ? "Song" : data.artists ? "Album" : "Artist"}
              </p>
            </>
          )}
        </div>
      )}
      {cancelIcon && (
        <div className="song-item-cancel-icon">
          <MdOutlineCancel />
        </div>
      )}
      {likeIcon && (
        <div
          className="song-item-like-icon"
          onClick={() => setIsLiked(!isLiked)}
          style={{marginRight: likeIconMarginR}}
        >
          {isLiked ? <AiFillHeart style={{color: 'red'}} /> : <AiOutlineHeart />}
        </div>
      )}
      {durDots && (
        <div className="song-item-dur-dots">
          { isHover ? 
            <BsThreeDots /> : 
            <p>
              {
                duration !== null ?
                `${
                  dur?.min > 9
                  ? dur.min
                  : "0" + dur.min
                  }:${
                  dur.sec > 9
                  ? dur.sec
                  : "0" + dur.sec
                }`:
                '00:00'
              }
            </p>
          }
        </div>
      )}
    </div>
  );
}

export default SongItem;
