import React, { useEffect, useState } from 'react'
import MusicCard from '../MusicCard/MusicCard'
import Browse from './Browse'
import './NewReleases.css'

function NewReleases({type}) {

    const [isLang , setIsLang] = useState(true)
    const [songDataArr , setSongDataArr] = useState([])

    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/music/${type}?&page=3&limit=40`, {
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
    <div className='new-releases-container'>
        <Browse isLang={isLang}/>
        <div className='new-releases-main-section'>
            <h1 className='new-releases-heading'>New Songs</h1>
            <div className='new-releases-album-container'>
                <div className='new-releases-album'>
                    {
                        songDataArr.map((e,idx)=>(
                            <MusicCard key={idx} data={{...e,type}} />
                        ))
                    }
                </div>
                {type !== 'artist' && <h4 className='new-releases-album-end' >Yay! You have seen it all 🤩</h4>}
            </div>
        </div>
    </div>
  )
}

export default NewReleases