import React, { useContext, useEffect, useRef } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import { JiosaavnContext } from '../App/App'

import './OptionsModal.css'


function OptionsModal() {

  const {showOption , setShowOption} = useContext(JiosaavnContext)

  const optionRef = useRef()

  const firstRef = useRef(false)

  const scrollFunc = () =>{
    setShowOption(false)
  }

  const clickFunc = (e) =>{
    // console.log('clicked' , e , optionRef)
    if(!firstRef.current){
      firstRef.current = true;
      return;
    }

    if(!optionRef.current.contains(e.target)){
      setShowOption(false)
    }
  }

  useEffect(()=>{
    
    window.addEventListener('scroll', scrollFunc)

    window.addEventListener('click', clickFunc)

    return () =>{
      window.removeEventListener('scroll', scrollFunc)
      window.removeEventListener('click', clickFunc)
    }
  },[])

  return (
    <div className='options-modal-parent'>
      <div className='options-modal-container' ref={optionRef} style={{top:showOption?.top , left:showOption?.left}}>
        <ul className='options-modal-ul-1'>
          <li className='play-now'>Play Album Now</li>
          <li className='save-to-lib'>Save to Library</li>
          <li className='add-to-queue'>Add to Queue</li>
          <li className='add-to-playlists'>Add to Playlists</li>
          <li className='share'>
            <span>Share</span>
            <IoIosArrowForward className='frw-arrow' />
          </li>
        </ul>

        {/* <ul className='options-modal-ul-2'>
          <li className='back-btn'>
            <IoIosArrowBack className='back-arrow' />
            <span>Back</span>
          </li>
          <li className='copy-link'>Copy Link</li>
          <li className='twitter'>Twitter</li>
          <li className='facebook'>Facebook</li>
          <li className='email'>Email</li>
        </ul> */}
      </div>
    </div>
  )
}

export default OptionsModal