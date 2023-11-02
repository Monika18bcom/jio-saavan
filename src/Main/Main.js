import React, { useContext, useEffect } from 'react'
import './Main.css'
import MusicData from '../MusicData/MusicData'
import Loader from "../Loader/Loader";
import { JiosaavnContext } from '../App/App';


function Main({mainAlbumArr}) {

  const { isLoading } = useContext(JiosaavnContext)

  useEffect(()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
  },[])

  return (
    isLoading ? 
    <div className="main-loader-container">
        <Loader size='60' border='6'  />
    </div> :
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