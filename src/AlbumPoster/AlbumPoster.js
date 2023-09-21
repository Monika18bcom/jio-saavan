import React from 'react'
import './AlbumPoster.css'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'


function AlbumPoster() {
  return (
    <div className='album-poster-container'>
        <div className='album-poster-image-section'>
            <img className='album-poster-image' src='https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0a7.jpg' alt='album image'></img>
        </div>
        <div className='album-poster-description'>
            <h1 className='album-poster-title'></h1>
            <p className='album-poster-details'>by<span>Kishore Kumar</span> &period; <span>30 Songs</span> &period; <span>260,848,504 Plays</span> &period; <span>2:36:00</span></p>
            <p className='album-poster-trade'>&trade; 1973 Universal Music India Pvt. Ltd.</p>
            <div className='album-poster-controls'>
                <div className='album-poster-play-btn'>Play</div>
                <div className='album-poster-like-btn'>
                    <span className='album-poster-like-icon'><AiOutlineHeart /></span>
                </div>
                <div className='album-poster-options-btn'>
                    <span className='album-poster-options-icon'><BsThreeDots /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlbumPoster