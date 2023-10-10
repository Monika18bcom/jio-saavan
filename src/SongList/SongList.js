import React, { useContext, useState } from 'react'
import './SongList.css'
import { BsPlayCircle } from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

import { JiosaavnContext } from "../App/App";
import { useNavigate } from 'react-router-dom'


function SongList({data, num, artistArr}) {

    

    const {songData , setSongData} = useContext(JiosaavnContext)
    const navigate = useNavigate()
    // console.log(songData , "data 11 line song list")

    const [isHover, setIsHover] = useState(false)
    const [isLikeRed, setIsLikeRed] = useState(false);
    // const [idx , setIdx] = useState(null)



    const songListMouseOver = ()=>{
        setIsHover(true)
    }

    const songListMouseOut = ()=>{
        setIsHover(false)
    }

    const handleClick = (e)=>{
        if(e.target.classList.contains("song-list-play-icon") || e.target.parentElement.classList.contains("song-list-play-icon")){
            console.log("play button clicked")
            if(data){
                // console.log(data._id)
                setSongData(data._id)
                // setIdx(data._id)
            }
        }else if(e.target.classList.contains("song-list-song-title")){
            console.log("title" , e)
            // navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
        }else if(e.target.classList.contains("song-list-song-artist")){
            console.log("artist" , e)
            // navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
        }else if(e.target.classList.contains("song-list-like-icon") || e.target.parentElement.classList.contains("song-list-like-icon")){
            console.log("like icon")
            setIsLikeRed(!isLikeRed)
        }else if(e.target.classList.contains("song-list-option-icon") || e.target.parentElement.classList.contains("song-list-option-icon")){
            console.log("options")
        }

    }

    const handleClickAlbum = (e) => {
        console.log(e)
        navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
    }

    

    // console.log(idx)

  return (
    <div className='song-list-container' 
        style={{backgroundColor: isHover && '#fff',borderRadius: isHover && '4px', border: isHover && '1px solid #e9e9e9'}} 
        onMouseOver={songListMouseOver} 
        onMouseOut={songListMouseOut} 
        onClick={(e)=>handleClick(e)}>
        <div className='song-list-play-index'>  
            {
                isHover ? <BsPlayCircle className='song-list-play-icon' style={{fontSize: "26px"}} />  : <div className='song-list-song-num'>{num ? num + 1 : 1}</div>
            }
        </div>
        <div className='song-list-song-info'>
            <h4 className='song-list-song-title' style={{color: data._id === songData && '#2bc5b4'}} onClick={()=>handleClickAlbum(data)} >{data.title}</h4>
            <p className='song-list-song-artist'>
                {
                    artistArr?.name || 
                    artistArr?.artists.map((e , idx)=>{
                        if(data.artist.includes(e._id)){
                           return  <span key={e._id} onClick={()=>handleClickAlbum(e)}>{e.name + `${idx < (artistArr.artists.length -1) ? ", " : ""}`}</span>
                            // return `${e.name},`;
                        }
                    }) || 
                    data?.artist?.map((e , idx)=> (
                        <span key={e._id} onClick={()=>handleClickAlbum(e)}>{e.name + `${idx < (data.artist.length -1) ? ", " : ""}`}</span>
                    ))
                }
            </p>
        </div>
        {
            isLikeRed ? 
            <AiFillHeart className='song-list-like-icon' style={{color: 'red'}} /> : <AiOutlineHeart className='song-list-like-icon' />
        }
        <div className='song-list-duration-option'>
            {
                isHover ? <BsThreeDots className='song-list-option-icon' style={{fontSize: "26px"}} /> : <div className='song-list-song-duration'>5:20</div>
            } 
        </div>
    </div>
  )
}

export default SongList