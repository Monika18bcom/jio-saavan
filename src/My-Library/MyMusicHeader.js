import React, { useContext, useMemo, useState } from 'react'
import './MyMusicHeader.css'
import {IoIosSearch} from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../useAuth'
import { MainPageContext } from '../App/MainPage'

import {GoHistory} from 'react-icons/go'
import {IoMusicalNoteOutline} from 'react-icons/io5'
import {RiAlbumLine} from 'react-icons/ri'
import {MdPodcasts} from 'react-icons/md'
import {LiaMicrophoneAltSolid} from 'react-icons/lia'
import {PiPlaylist} from 'react-icons/pi'
import {IoIosArrowForward} from 'react-icons/io'




function MyMusicHeader() {

    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'
    const { logOut } = useAuth()
    const navigate = useNavigate()

    const {isProActive} = useContext(MainPageContext)

    const [myMusicArr , setMyMusicArr] = useState(false)

    const userName = useMemo(()=>{
        const name = localStorage.getItem('userName')
        return JSON.parse(name)
    },[])

    console.log("window.location.pathname", window.location.pathname)

  return (
    <div className='my-music-header-container' style={{display:window.innerWidth <980 && window.location.pathname !== '/my-music' && "none"}}>
        <div className='my-music-header-user-profile'>
            <div className='my-music-header-img-section'>
                <div className='profile-img'>
                    <img src={profileImg} alt='Profile Image' ></img>
                </div>
                <div className='user-name'>
                    <h2>{userName}</h2>
                    <h3>Free</h3>
                    <span>{isProActive ? 'Pro Member' :'Go Pro'}</span>
                </div>
            </div>
            <div className='my-music-header-logout-section'>
                <div className='logout-btn' onClick={()=> { 
                    logOut()
                    navigate('/')
                    }} >Log Out</div>
            </div>
        </div>
        <div className='my-music-header-user-library'>
            <ul className='library-ul'>
                <li>
                    <NavLink to='/my-music/playlists'>
                        <div>
                            <PiPlaylist className="icons" />
                            Playlists
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/songs'>
                        <div>
                            <IoMusicalNoteOutline className="icons" />
                            Songs
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/albums'>
                        <div>
                            <RiAlbumLine className="icons" />
                            Albums
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/podcasts'>
                        <div>
                            <MdPodcasts className="icons" />
                            Podcasts
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/artists'>
                        <div>
                            <LiaMicrophoneAltSolid className="icons" />
                            Artists
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/listening-history'>
                        <div>
                            <GoHistory className="icons" />
                            History
                        </div>
                        <IoIosArrowForward className='right-arrow' />
                    </NavLink>
                </li>
            </ul>
            <div className='library-btns'>
                <span className='sync-library'>Sync Library</span>
                <span className='shuffle-all'>Shuffle All</span>
            </div>
            <div className='responsive-logout'>
                <span>Logout</span>
            </div>
        </div>
        {
            myMusicArr &&
            <div className='my-music-header-usermusic-data'>
                <p><span>count</span><span>type</span></p>
                <form className='filter-search'>
                    <IoIosSearch className='search-icon' />
                    <input type='text' placeholder='Filter type'></input>
                </form>
            </div>
        }
    </div>
  )
}

export default MyMusicHeader