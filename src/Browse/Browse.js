import React from 'react'
import './Browse.css'
// import { NavLink } from "react-router-dom";

import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'


function Browse() {
  const langArr = ['For You','Hindi','Tamil','Telugu','English','Punjabi',
                  'Marathi','Gujarati','Bengali',
                  'Kannada','Bhojpuri','Malayalam','Urdu',
                  'Haryanvi','Rajasthani','Odia','Assamese']
  return (
    <div className='browse-container'>
      <div className='browse-nav-section'>
        <ul className='browse-nav-ul'>
          <li>New Releases</li>
          <li>Charts</li>
          <li>Top Playlists</li>
          <li>Podcasts</li>
          <li>Top Artists</li>
          <li>Radio</li>
        </ul>
        <div className='browse-nav-btn'>Surprise Me</div>
      </div>
      <div className='browse-lang-section'>
        <div className='browse-left-arrow'>
          <IoIosArrowBack className='lang-left-arrow'/>
        </div>
        <div className='browse-lang-container'>
          <ul className='browse-lang-ul'>
            { 
              langArr.map((e, idx)=>(
                <li key={idx}><span>{e}</span></li>
              ))
            }
          </ul>
        </div>
        <div className='browse-right-arrow'>
          <IoIosArrowForward className='lang-right-arrow'/>
        </div>
      </div>
    </div>
  )
}

export default Browse