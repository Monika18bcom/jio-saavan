import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import './ComingSoon.css'
import { useNavigate } from 'react-router-dom'


function ComingSoon() {

    const navigate = useNavigate()
  return (
    <div className='coming-soon-container'>
        <h4>Save your favourites.</h4>
        <p>Tap any <FontAwesomeIcon icon={faHeart} /> or <FontAwesomeIcon icon={faEllipsis} /> button to build your music library.</p>
        <div className='coming-soon-btns'>
            <div className='home-music-btn' onClick={()=> navigate('/')}>
                <span>Play Weekly Top Songs</span>
            </div>
            <div className='new-releases-btn' onClick={()=> navigate('/new-releases')}>
                <span>Browse New Releases</span>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon