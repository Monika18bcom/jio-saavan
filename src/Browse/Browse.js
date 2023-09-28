import React from 'react'
import './Browse.css'
// import { NavLink } from "react-router-dom";

import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom'


function Browse({isLang}) {
  const langArr = ['For You','Hindi','Tamil','Telugu','English','Punjabi',
                  'Marathi','Gujarati','Bengali',
                  'Kannada','Bhojpuri','Malayalam','Urdu',
                  'Haryanvi','Rajasthani','Odia','Assamese']
  return (
    <div className='browse-container'>
      <div className='browse-nav-section'>
        <ul className='browse-nav-ul'>
          <li><NavLink to='/new-releases'>New Releases</NavLink></li>
          <li><NavLink to='/top-charts'>Charts</NavLink></li>
          <li><NavLink to='/top-playlists'>Top Playlists</NavLink></li>
          <li><NavLink to='/original-podcasts'>Podcasts</NavLink></li>
          <li><NavLink to='/top-artists'>Top Artists</NavLink></li>
          <li><NavLink to='/radio'>Radio</NavLink></li>
        </ul>
        <div className='browse-nav-btn'>Surprise Me</div>
      </div>
      {isLang && (<div className='browse-lang-section'>
        <div className='browse-left-arrow'>
          <IoIosArrowBack className='lang-left-arrow'/>
        </div>
        <ul className='browse-lang-ul'>
            { 
              langArr.map((e, idx)=>(
                <li key={idx}><span>{e}</span></li>
              ))
            }
          </ul>
        <div className='browse-right-arrow'>
          <IoIosArrowForward className='lang-right-arrow'/>
        </div>
      </div>)}
    </div>
  )
}

export default Browse