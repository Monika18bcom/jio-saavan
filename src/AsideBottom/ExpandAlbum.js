import React, { useState } from 'react'

import './ExpandAlbum.css'

function ExpandAlbum({ localSongData }) {

    // console.log("expandAlbum file",localSongData)

    const [isHover, setIsHover] = useState(false);
    // const src = 'https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf94e447ae38c3e33a7253.jpg'
    // const title = "Story-10 S3 Beemar"
    // const artistName = "Ashish Vidyarthi"

  return (
    <div className='expand-album-container'>
        <div className='expand-album-img-section'>
                <img src={localSongData?.thumbnail} alt={localSongData?.title}></img>
                <h3 style={{color: isHover ? 'black' : '#3e3e3e'}} >{localSongData?.title}</h3>
                <p>{localSongData?.artist && localSongData?.artist.map((e)=> e.name).join(',')}</p>
            </div>
        <div className='expand-album-queue-section' >Queue</div>

    </div>
  )
}

export default ExpandAlbum