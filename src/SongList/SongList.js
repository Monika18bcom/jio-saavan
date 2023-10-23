import React, { useContext, useState } from 'react'
import './SongList.css'
import { BsPlayCircle } from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

import { JiosaavnContext } from "../App/App";
import { useNavigate } from 'react-router-dom'


function SongList({data, num, artistArr}) {

    

    const {songId , setSongId} = useContext(JiosaavnContext)

    const navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)
    const [isLikeRed, setIsLikeRed] = useState(false);

    const songListMouseOver = ()=>{
        setIsHover(true)
    }

    const songListMouseOut = ()=>{
        setIsHover(false)
    }


    const handleClickAlbum = (e) => {
        // console.log(e)
        navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
    }

    const setSongIdx = () =>{
        if(data){
            // console.log(data._id)
            setSongId(data._id)
        }
    }

    const toggleLike = () =>{
        setIsLikeRed(!isLikeRed)
    }

    

    // console.log(idx)

  return (
    <div className='song-list-container' 
        style={{backgroundColor: isHover && '#fff',borderRadius: isHover && '4px', border: isHover && '1px solid #e9e9e9'}} 
        onMouseOver={songListMouseOver} 
        onMouseOut={songListMouseOut} 
        >
        <div className='song-list-play-index' onClick={setSongIdx}>  
            {
                isHover ? <BsPlayCircle className='song-list-play-icon' style={{fontSize: "26px"}} />  : <div className='song-list-song-num'>{num ? num + 1 : 1}</div>
            }
        </div>
        <div className='song-list-song-info'>
            <h4 className='song-list-song-title' style={{color: data._id === songId && '#2bc5b4'}} onClick={()=>handleClickAlbum(data)} >{data.title}</h4>
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
            <AiFillHeart className='song-list-like-icon' style={{color: 'red'}} onClick={toggleLike} /> : <AiOutlineHeart className='song-list-like-icon' onClick={toggleLike} />
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