import React, { useEffect, useMemo } from 'react'
import './Me.css'
import {PiPencilSimple} from 'react-icons/pi'
import {BsDot} from 'react-icons/bs'


function Me() {

    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'
    const playlistImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-playlist-500x500.jpg'

    const userName = useMemo(()=>{
        const name = localStorage.getItem('userName')
        const string = JSON.parse(name)
        const fChar = string.charAt(0)
        if((fChar >= 'a' && fChar <='z') || (fChar >= 'A' && fChar <='Z')){
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
        return string
    },[])

    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])

  return (
    <div className='me-profile-container'>
        <div className='me-header' >
            <div className='me-img-section' >
                <img src={profileImg} alt='Profile Image' ></img>
            </div>
            <div className='me-user-data'>
                <h1 >{userName}</h1>
                <p >
                    <span>user</span>
                    <BsDot />
                    <span>1 Playlist</span>
                </p>
                <div className='me-btn-icon'>
                    <div className='me-play-btn'>
                        <span>Play</span>
                    </div>
                    <div className='me-edit-icon'>
                        <PiPencilSimple className='edit-icon' />
                    </div>
                </div>
            </div>
        </div>
        <div className='me-playlists-data-section'>
            <h2 >Playlists</h2>
            <div className='me-playlists-data'>
                <div className='me-playlists-img-name'>
                    <img src={playlistImg}></img>
                    <h4>Starred Songs</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Me