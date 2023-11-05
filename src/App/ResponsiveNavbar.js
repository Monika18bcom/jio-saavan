import React, { useContext } from 'react'
import {IoIosSearch} from 'react-icons/io'
import {GoPerson} from 'react-icons/go'
import {GoHome} from 'react-icons/go'
import {AiOutlineCompass} from 'react-icons/ai'
import './ResponsiveNavbar.css'
import { JiosaavnContext } from './App'
import { useNavigate } from 'react-router-dom'
import { MainPageContext } from './MainPage'


function ResponsiveNavbar() {
    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'

    const {userData , setSearchOpen} = useContext(JiosaavnContext)
    const {setIsNavMusicHover , isNavMusicHover} = useContext(MainPageContext)

    const navigate = useNavigate()

  return (
    <ul className='responsive-navbar-container'>
        <li className='home' onClick={()=>navigate('/')} >
            <GoHome className='icon' />
            <span>Home</span>
        </li>
        <li className='search' onClick={()=>navigate('/search')} >
            {/* onClick={()=>setSearchOpen(true)} */}
            <IoIosSearch className='icon' />
            <span>Search</span>
        </li>
        <li className='browse' onClick={()=>setIsNavMusicHover(!isNavMusicHover)} >
            <AiOutlineCompass className='icon' />
            <span>Browse</span>
        </li>

        {
            userData?.userDetails !== null ? 
            <li className='my-music' onClick={()=>navigate('/my-music')} >
                <img src={profileImg} alt='Profile Image' ></img>
                <span>My Music</span>
            </li> :
            <li className='login' onClick={()=>navigate('/login')} >
                <GoPerson className='icon' />
                <span>Login</span>
            </li>


            // <div className="nav-bar-user-profile" onClick={handleProfile} >
            //     <img className="nav-bar-profile-img" src={profileImg} alt='Profile Image' ></img>
            //     {profileSelected ? <RiArrowUpSLine className="arrow-icon" /> : <RiArrowDownSLine className="arrow-icon" />}
            // </div> :
            // <ul className="right-ul">
            //     <li><NavLink className="navlink" to="/login">Log In</NavLink></li>
            //     <li><NavLink className="navlink" to="/signup">Sign Up</NavLink></li>
            // </ul>
        }

        
        
    </ul>
  )
}

export default ResponsiveNavbar


