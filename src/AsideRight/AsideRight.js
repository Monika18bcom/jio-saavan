import React, { useState } from 'react'
import './AsideRight.css'
import {BsThreeDots} from 'react-icons/bs'



function AsideRight() {

    const [autoPlay, setAutoPlay] = useState(false)
  return (
    <div className='aside-right-section'>
        <div className='aside-right-header'>
            <div className='aside-right-header-title'>Queue</div>
            <div className='aside-right-header-actions'>
                <BsThreeDots className='aside-right more-info' />
                <div className='aside-right save-btn'>Save</div>
                <div className='aside-right clear-btn'>Clear</div>
            </div>
        </div>
        <hr></hr>
        <div className='aside-right-content'>
            <ul className='aside-right-album-container'>
                
            </ul>
            {
                autoPlay &&
                <>
                    <div className='aside-right-checkbox'>
                    <label htmlFor="a-r-checkbox">
                        Autoplay more like this.
                        <input id='a-r-checkbox' type='checkbox'/>
                    </label>

                    </div>
                    <ul className='aside-right-album-container'>
                    
                    </ul>
                </>
            }
            
        </div>
    </div>
  )
}

export default AsideRight