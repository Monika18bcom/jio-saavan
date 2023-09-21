import React from 'react'
import './Main.css'
import MusicData from '../MusicData/MusicData'

function Main({mainAlbumArr}) {
  console.log(mainAlbumArr)
  return (
    <main className='main-album-content'>
        {
        mainAlbumArr?.map((album, idx)=>(
            <div className="main-album-section" key={idx}>
                <h2 className='main-album-heading'>{album.title}</h2>
                {album && <MusicData album={album} />}
            </div>
        ))
        }
    </main>
  )
}

export default Main