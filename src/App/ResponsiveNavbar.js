import React from 'react'
import {IoIosSearch} from 'react-icons/io'
import {GoPerson} from 'react-icons/go'
import {GoHome} from 'react-icons/go'
import {AiOutlineCompass} from 'react-icons/ai'
import './ResponsiveNavbar.css'

// GrHomeRounded
// GoHome
// BsPerson
// AiOutlineCompass

function ResponsiveNavbar() {
    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'

  return (
    <ul className='responsive-navbar-container'>
        <li className='home'>
            <GoHome className='icon' />
            <span>Home</span>
        </li>
        <li className='search'>
            <IoIosSearch className='icon' />
            <span>Search</span>
        </li>
        <li className='browse'>
            <AiOutlineCompass className='icon' />
            <span>Browse</span>
        </li>
        <li className='login'>
            <GoPerson className='icon' />
            <span>Login</span>
        </li>
        {/* <li className='my-music'>
            <img src={profileImg} alt='Profile Image' ></img>
            <span>My Music</span>
        </li> */}
    </ul>
  )
}

export default ResponsiveNavbar