import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { JiosaavnContext } from '../App/App'

function AsideBottomAlbum({localSongData}) {

    const { isExpand , setIsExpand } = useContext(JiosaavnContext)
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false);


    const handleClick = (e) => {

        if(window.innerWidth <= 980){
            setIsExpand(true)
        }
        navigate(`/${e.type || "artist"}/${e.name || e.title}/${e._id}`);
    };

    
  return (
    <div className="aside-bottom-album" style={{display: (window.innerWidth <= 980 && isExpand) && "none" }}>
        {!isExpand && (
        <>
            <img
            className="aside-bottom-img"
            src={localSongData?.thumbnail}
            alt={localSongData?.title}
            style={{ cursor: localSongData && "pointer" }}
            onClick={() => handleClick(localSongData)}
            />
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
  )
}

export default AsideBottomAlbum