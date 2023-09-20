import React from 'react'
import './AsideRight.css'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {PiDotsSixVerticalBold} from 'react-icons/pi'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'




function AsideRight() {
  return (
    <div id='aside-right-section' className='aside-right-section'>
        <div className='aside-right-header'>
            <div className='aside-right-header-title'>Queue</div>
            <div className='aside-right-header-actions'>
                <div className='aside-right more-info'><BsThreeDots /></div>
                <div className='aside-right save-btn'>Save</div>
                <div className='aside-right clear-btn'>Clear</div>
            </div>
        </div>
        <hr></hr>
        <div className='aside-right-content'>
            <ul className='aside-right-album-container'>
                <li className='aside-right-single-album'>
                    <div className='aside-right-dots'><PiDotsSixVerticalBold /></div>
                    <div className='aside-right-album-img'><AiOutlinePlayCircle /></div>
                    <div className='aside-right-album-info'>
                        <h4 className='aside-right-song-title'>Dil Jhoom</h4>
                        <p className='aside-right-artist'>Mithoon,Arijit Singh</p>
                    </div>
                    <div className='aside-right-remove-icon'><MdOutlineCancel /></div>
                    <div className='aside-right-heart'><AiOutlineHeart /></div>
                    <div className='aside-right-album-duration'>5:04</div>
                </li>
            </ul>
            <div className='aside-right-checkbox'>
                <label htmlFor="a-r-checkbox">
                    Autoplay more like this.
                    <input id='a-r-checkbox' type='checkbox'/>
                </label>
            </div>
            <ul className='aside-right-album-container'>
                <li>
                    <div><PiDotsSixVerticalBold /></div>
                    <div><AiOutlinePlayCircle /></div>
                    <div>
                        <h4>Dil Jhoom</h4>
                        <p>Mithoon,Arijit Singh</p>
                    </div>
                    <div><AiOutlineHeart /></div>
                    <div>5:04</div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AsideRight