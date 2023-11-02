import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'

import './OptionsModal.css'


function OptionsModal() {
  return (
    <div className='options-modal-container'>
      {/* <ul className='options-modal-ul-1'>
        <li className='play-now'>Play Album Now</li>
        <li className='save-to-lib'>Save to Library</li>
        <li className='add-to-queue'>Add to Queue</li>
        <li className='add-to-playlists'>Add to Playlists</li>
        <li className='share'>
          <span>Share</span>
          <IoIosArrowForward className='frw-arrow' />
        </li>
      </ul> */}

      <ul className='options-modal-ul-2'>
        <li className='back-btn'>
          <IoIosArrowBack className='back-arrow' />
          <span>Back</span>
        </li>
        <li className='copy-link'>Copy Link</li>
        <li className='twitter'>Twitter</li>
        <li className='facebook'>Facebook</li>
        <li className='email'>Email</li>
      </ul>
    </div>
  )
}

export default OptionsModal