import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { JiosaavnContext } from '../App/App';

import './ExpandAlbum.css'

function ExpandAlbum({ localSongData }) {
  const navigate = useNavigate()
  const { setIsExpand } = useContext(JiosaavnContext)

  const [isHover, setIsHover] = useState(false);

  const handleClick = (e) => {
    navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
    setIsExpand(false)
  }


  return (
    <div className='expand-album-container'>
        <div className='expand-album-img-section'>
                <img src={localSongData?.thumbnail} alt={localSongData?.title}></img>
                <h3 style={{color: isHover ? 'black' : '#3e3e3e'}} onClick={()=>handleClick(localSongData)} >{localSongData?.title}</h3>
                <p>
                  {
                    localSongData?.artist && 
                    localSongData?.artist.map((e , idx)=> (
                        <span key={e._id} onClick={()=>handleClick(e)}>{e.name + `${idx < (localSongData.artist.length -1) ? ", " : ""}`}</span>
                    ))
                  }
                </p>
            </div>
        <div className='expand-album-queue-section' >Queue</div>

    </div>
  )
}

export default ExpandAlbum