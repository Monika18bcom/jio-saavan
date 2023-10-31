import React, { useContext, useMemo, useState } from 'react'
import './MyMusicHeader.css'
import {IoIosSearch} from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../useAuth'
import { MainPageContext } from '../App/MainPage'



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

  return (
    <div className='my-music-header-container'>
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
                <li><NavLink to='playlists'>Playlists</NavLink></li>
                <li><NavLink to='songs'>Songs</NavLink></li>
                <li><NavLink to='albums'>Albums</NavLink></li>
                <li><NavLink to='podcasts'>Podcasts</NavLink></li>
                <li><NavLink to='artists'>Artists</NavLink></li>
                <li><NavLink to='/listening-history'>History</NavLink></li>
            </ul>
            <div className='library-btns'>
                <span className='sync-library'>Sync Library</span>
                <span className='shuffle-all'>Shuffle All</span>
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