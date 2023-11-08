import React, { useContext, useEffect, useRef, useState } from 'react'
import './Browse.css'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import { JiosaavnContext } from "../App/App";



function Browse({type,surpriseMeId}) {

  // console.log('surprise me' , surpriseMeId , 'browse.js')

  const {setSongId} = useContext(JiosaavnContext)
  
  const langArr = ['For You','Hindi','Tamil','Telugu','English','Punjabi',
                  'Marathi','Gujarati','Bengali',
                  'Kannada','Bhojpuri','Malayalam','Urdu',
                  'Haryanvi','Rajasthani','Odia','Assamese']

  const [selectedIdx, setSelectedIdx] = useState(0)
  const [isALDisabled ,setIsALDisabled] = useState(true)
    //AL -> Arrow Left
    const [isARDisabled ,setIsARDisabled] = useState(false)
    //AR -> Arrow Right

  const browseRef = useRef()

  const [browseDropDown, setBrowseDropDown] = useState(false)

  useEffect(()=>{
    
    setBrowseDropDown(false)

  },[window.location.pathname])

  const handleSurpriseMe =()=>{
    if(surpriseMeId){
      setSongId(surpriseMeId)
    }

    if(browseDropDown){
      setBrowseDropDown(false)
    }
  }

  const handleLeftArrow = ()=>{
    browseRef.current.scrollBy({left: - browseRef.current.offsetWidth , behavior: 'smooth'})
  }

  const handleRightArrow = ()=>{
    browseRef.current.scrollBy({left: browseRef.current.offsetWidth , behavior: 'smooth'})
  }

  return (
    <div className='browse-container'>
      <div className='browse-nav-section'>
        <div className='browse-drop-down' onClick={()=> setBrowseDropDown(!browseDropDown)}>
          <span className='drop-down-header'>Browse</span>
          <IoIosArrowDown className='drop-down-arrow' />
        </div>
        <div className='browse-nav-main-ul-section' style={{display: (!browseDropDown && window.innerWidth < 980) && "none" }} >
          <span className='responsive-browse-header' style={{display: (!browseDropDown && window.innerWidth > 980) && "none" }}>Browse</span>
          <div className='browse-nav-sub-ul-section'>
            <ul className='browse-nav-ul' >
              <li><NavLink to='/new-releases'>New Releases</NavLink></li>
              <li><NavLink to='/top-charts'>Charts</NavLink></li>
              <li><NavLink to='/top-playlists'>Top Playlists</NavLink></li>
              <li><NavLink to='/original-podcasts'>Podcasts</NavLink></li>
              <li><NavLink to='/top-artists'>Top Artists</NavLink></li>
              <li><NavLink to='/radio'>Radio</NavLink></li>
            </ul>
            <div className='browse-nav-btn' onClick={handleSurpriseMe} >Surprise Me</div>
          </div>
          <span className='responsive-browse-footer' onClick={()=>setBrowseDropDown(!browseDropDown)} style={{display: (!browseDropDown && window.innerWidth > 980) && "none" }}>Cancel</span>
        </div>
      </div>
      {
        ((type === 'song')|| (type === 'album') || (type === 'radio')) && 
        (<div className='browse-lang-section'>
          <div className='browse-left-arrow'>
            <IoIosArrowBack className='lang-left-arrow' onClick={handleLeftArrow} style={{cursor: isALDisabled ? 'auto' : 'pointer', opacity: isALDisabled? '0' : '1'}}/>
          </div>
          <ul className='browse-lang-ul'
            onScroll={()=>{
              if(browseRef.current.scrollLeft >0){
                setIsALDisabled(false)
              }else{
                setIsALDisabled(true)
              }

              if((browseRef.current.scrollWidth - (browseRef.current.scrollLeft + browseRef.current.offsetWidth)) >1){
                setIsARDisabled(false)
              }else{
                setIsARDisabled(true)
              }
            }} 
      
            ref={browseRef}>
            { 
              langArr.map((e, idx)=>(
                <li key={idx}><span style={{borderRadius:selectedIdx === idx && '16px' , backgroundColor:selectedIdx === idx && '#ede8e8'}} onClick={()=>setSelectedIdx(idx)} >{e}</span></li>
              ))
            }
          </ul>
          <div className='browse-right-arrow'>
            <IoIosArrowForward className='lang-right-arrow' onClick={handleRightArrow} style={{cursor: isARDisabled ? 'auto' : 'pointer', opacity: isARDisabled? '0' : '1'}}/>
          </div>
        </div>)
      }
    </div>
  )
}

export default Browse