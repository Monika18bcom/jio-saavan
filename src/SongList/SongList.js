import React, { useState } from 'react'
import './SongList.css'
import { BsPlayCircle } from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'


function SongList({data, num}) {

    // console.log(data)

    const [isHover, setIsHover] = useState(false)

    const songListMouseOver = ()=>{
        setIsHover(true)
    }

    const songListMouseOut = ()=>{
        setIsHover(false)
    }

  return (
    <div className='song-list-container' style={{backgroundColor: isHover && '#fff',borderRadius: isHover && '4px', border: isHover && '1px solid #e9e9e9'}} onMouseOver={songListMouseOver} onMouseOut={songListMouseOut} >
        <div className='song-list-play-index'>  
            {
                isHover ? <BsPlayCircle className='song-list-play-icon' style={{fontSize: "26px"}} />  : <div className='song-list-song-num'>{num ? num + 1 : 1}</div>
            }
        </div>
        <div className='song-list-song-info'>
            <h4 className='song-list-song-title'>{data.title}</h4>
            <p className='song-list-song-artist'>{data?.artist?.map((e)=> e.name).join(',')}</p>
        </div>
        <div className='song-list-like-icon' style={{fontSize: "24px"}}>
            <AiOutlineHeart />
        </div>
        <div className='song-list-duration-option'>
            {
                isHover ? <BsThreeDots className='song-list-option-icon' style={{fontSize: "26px"}} /> : <div className='song-list-song-duration'>5:20</div>
            } 
        </div>
    </div>
  )
}

export default SongList