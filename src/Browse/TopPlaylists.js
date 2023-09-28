import React, { useEffect, useState } from 'react'
import MusicCard from '../MusicCard/MusicCard'
import Browse from './Browse'
import './TopPlaylists.css'

function TopPlaylists() {
  const [isLang , setIsLang] = useState(true)
  const [songDataArr , setSongDataArr] = useState([])

    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/music/song?&page=5&limit=40`, {
            headers: {
            'projectId': 'nwi12vygvqne'
            }
            })
            .then((res)=> res.json())
            .then((result)=> {
                setSongDataArr(result.data)                
            })
        
    },[])

  return (
    <div className='top-playlists-container'>
        <Browse isLang={isLang} />
        <div className='top-playlists-main-section'>
            <h1 className='top-playlists-heading'>New Songs</h1>
            <div className='top-playlists-album-container'>
                <div className='top-playlists-album'>
                    {
                        songDataArr.map((e,idx)=>(
                            <MusicCard key={idx} data={{...e,type:'song'}} />
                        ))
                    }
                </div>
                <h4 className='top-playlists-album-end' >Yay! You have seen it all 🤩</h4>
            </div>
        </div>
    </div>
  )
}

export default TopPlaylists