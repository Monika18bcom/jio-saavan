import React, { useContext, useState } from 'react'
import './Browse.css'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import { JiosaavnContext } from "../App/App";



function Browse({type,surpriseMeId}) {
  
  const langArr = ['For You','Hindi','Tamil','Telugu','English','Punjabi',
                  'Marathi','Gujarati','Bengali',
                  'Kannada','Bhojpuri','Malayalam','Urdu',
                  'Haryanvi','Rajasthani','Odia','Assamese']

  const [selectedIdx, setSelectedIdx] = useState(0)

  const {setSongData} = useContext(JiosaavnContext)


  const handleSurpriseMe =()=>{
    console.log("surprise me" , surpriseMeId)
    if(surpriseMeId){
      setSongData(surpriseMeId)
    }

  }
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
        <div className='browse-nav-btn' onClick={handleSurpriseMe} >Surprise Me</div>
      </div>
      {type !== 'artist' && (<div className='browse-lang-section'>
        <div className='browse-left-arrow'>
          <IoIosArrowBack className='lang-left-arrow'/>
        </div>
        <ul className='browse-lang-ul'>
            { 
              langArr.map((e, idx)=>(
                <li key={idx}><span style={{borderRadius:selectedIdx === idx && '16px' , backgroundColor:selectedIdx === idx && '#e1dddd'}} onClick={()=>setSelectedIdx(idx)} >{e}</span></li>
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