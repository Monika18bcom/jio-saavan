import React, { useState } from 'react'
import './AlbumPoster.css'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'


function AlbumPoster({data}) {

    console.log(data)

    const [isPlayHover, setIsPlayHover] = useState(false)
    const [isLikeHover, setIsLikeHover] = useState(false)
    const [isOptionsHover, setIsOptionsHover] = useState(false)


    const handleMouseOver = (e)=>{
        if(e.target.classList.contains('album-poster-play-btn')){
            console.log('play clicked')
            setIsPlayHover(true)           
        }else if(e.target.classList.contains('album-poster-like-btn') || e.target.classList.contains('album-poster-like-icon') || e.target.parentElement.classList.contains('album-poster-like-icon')){
            console.log("clicked like button")
            setIsLikeHover(true)
        }else if(e.target.classList.contains('album-poster-options-btn') || e.target.classList.contains('album-poster-options-icon') || e.target.parentElement.classList.contains('album-poster-options-icon')){
            console.log('option btn')
            setIsOptionsHover(true)
        }
    }

    const handleMouseOut = (e)=>{
        if(e.target.classList.contains('album-poster-play-btn')){
            console.log('play clicked')
            setIsPlayHover(false)           
        }else if(e.target.classList.contains('album-poster-like-btn') || e.target.classList.contains('album-poster-like-icon') || e.target.parentElement.classList.contains('album-poster-like-icon')){
            console.log("clicked like button")
            setIsLikeHover(false)
        }else if(e.target.classList.contains('album-poster-options-btn') || e.target.classList.contains('album-poster-options-icon') || e.target.parentElement.classList.contains('album-poster-options-icon')){
            console.log('option btn')
            setIsOptionsHover(false)
        }
    }


  return (
    <div className='album-poster-container'>
        <div className='album-poster-image-section'>
            <img className='album-poster-image' src={(data?.image) || (data?.thumbnail)} alt={(data?.name) || (data?.title)}></img>
        </div>
        <div className='album-poster-description'>
            <h1 className='album-poster-title a-p-overflow'>{(data?.name) || (data?.title)}</h1>
            <p className='album-poster-details a-p-overflow'>by <span className='album-poster-artist-name'>{data?.artist?.map((e)=> e.name).join(',') || data?.artists?.map((e)=> e.name).join(',')}</span> . <span>{data?.artist?.length} {data?.artist?.length ===1 ? 'song' : 'songs'}</span> . <span>260,848,504 Plays</span> . <span>2:36:00</span></p>
            <p className='album-poster-copyrights a-p-overflow'>&copy; 1973 Universal Music India Pvt. Ltd.</p>
            <div className='album-poster-controls' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <div className='album-poster-play-btn' style={{opacity: isPlayHover && '0.9'}} >Play</div>
                <div className='album-poster-like-btn' style={{borderColor: isLikeHover && '#707070'}} >
                    <AiOutlineHeart className='album-poster-like-icon'/>
                </div>
                <div className='album-poster-options-btn' style={{borderColor: isOptionsHover && '#707070'}}>
                    <BsThreeDots className='album-poster-options-icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlbumPoster