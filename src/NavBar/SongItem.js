import { height } from "@mui/system";
import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import "./SongItem.css";

function SongItem({
  data,
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
  playCur,
  titleCur,
  typeCur,
  songInfoFD,
  songInfoAI,
  songInfoJC,
  songInfoFSz,
  songInfoFCo,
}) {
  console.log(data);

  const [isHover, setIsHover] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  // border'1px solid #e9e9e9

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
        <div className="song-item-idx">
          {isHover && !songPoster ? (
            <BsPlayCircle className="play-icon" style={{ cursor: playCur }} />
          ) : (
            <p>1</p>
          )}
        </div>
      )}
      {songPoster && (
        <div className="song-item-img" style={{ marginRight: imgMarginR }}>
          {isHover ? (
            <BsPlayCircle className="play-icon" style={{ cursor: playCur }} />
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
          }}
        >
          <h4 className="song-info-title" style={{ cursor: titleCur }}>
            {data.type ? data.title : data.artists ? data.title : data.name}
          </h4>
          <p className="song-info-type" style={{ cursor: typeCur }}>
            {data.type ? "Song" : data.artists ? "Album" : "Artist"}
          </p>
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
        >
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      )}
      {durDots && (
        <div className="song-item-dur-dots">
          {isHover ? <BsThreeDots /> : <p>3:00</p>}
        </div>
      )}
    </div>
  );
}

export default SongItem;
