import React, { useEffect, useState } from 'react'
import MusicCard from '../MusicCard/MusicCard'
import Browse from './Browse'
import './NewReleases.css'
import Loader from "../Loader/Loader";


function NewReleases({type}) {
    const [songDataArr , setSongDataArr] = useState([])
    const [albumDataArr , setAlbumDataArr] = useState([])
    const [artistDataArr , setArtistDataArr] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [surpriseMeId , setSurpriseMeId] = useState('')

    const [randomIdx , setRandonIdx] = useState(0)

    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])


    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://academics.newtonschool.co/api/v1/music/${type}?&page=3&limit=40`, {
            headers: {
            'projectId': 'nwi12vygvqne'
            }
            })
            .then((res)=> res.json())
            .then((result)=> {  
                if(type === 'song'){
                    setIsLoading(false)
                    setSongDataArr(result.data) 
                    setRandonIdx(Math.floor((Math.random() * result?.data?.length)-1))
                    setSurpriseMeId(result.data[randomIdx]._id)
                }else if(type === 'album'){
                    setIsLoading(false)
                    setAlbumDataArr(result.data)
                    setRandonIdx(Math.floor((Math.random() * result?.data?.length)-1))
                    setSurpriseMeId(result.data[randomIdx].songs[0]._id)
                }else{
                    setIsLoading(false)
                    setArtistDataArr(result.data)
                    setRandonIdx(Math.floor((Math.random() * result?.data?.length)-1))
                    setSurpriseMeId(result.data[randomIdx].songs[0])
                }           
            })
        
    },[type])

  return (
    <div className='new-releases-container'>
        <Browse type={type} surpriseMeId={surpriseMeId}/>
        {isLoading ? 
        <div className="loader-container">
            <Loader border='4' size='40'/>
        </div> :
        <div className='new-releases-main-section'>
            {
                type === 'song' && <h1 className='new-releases-heading'>New Albums</h1> ||
                type === 'album' && <h1 className='new-releases-heading'>New Songs</h1>||
                type === 'artist' && <h1 className='new-releases-heading'>Top Artists</h1>
            }
            <div className='new-releases-album-container'>
                <div className='new-releases-album'>
                    {
                        type === 'song' && songDataArr?.map((e,idx)=>(
                            <MusicCard key={idx} data={{...e,type}} />
                        )) ||
                        type === 'album' && albumDataArr?.map((e,idx)=>(
                            <MusicCard key={idx} data={{...e,type}} />
                        )) ||
                        type === 'artist' && artistDataArr?.map((e,idx)=>(
                            <MusicCard key={idx} data={{...e,type}} />
                        ))
                    }
                </div>
                {type !== 'artist' && <h4 className='new-releases-album-end' >Yay! You have seen it all 🤩</h4>}
            </div>
        </div>}
    </div>
  )
}

export default NewReleases