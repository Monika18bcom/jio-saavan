import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { JiosaavnContext } from "../App/App";
import './NavBar.css';
import logo from "../img/jio-saavn-white-logo.png";
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import {IoIosSearch} from 'react-icons/io'
import { MainPageContext } from "../App/MainPage";



function NavBar(){

    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'

    const { userData , setSearchOpen , searchOpen } = useContext(JiosaavnContext) 
    const { setIsNavMusicHover , setDisplayAccount , displayAccount , profileSelected , setProfileSelected } = useContext(MainPageContext)

    const [isSelected, setIsSelected] = useState(false)

    const handleProfile = (e) => {

        if(e.target.classList.contains('nav-bar-user-profile') || e.target.parentElement.classList.contains('nav-bar-user-profile')){
            console.log("clicked profile")
            setProfileSelected(!profileSelected)
            setDisplayAccount(!displayAccount)
        }

    }

    const OpenSearch = () =>{
        setSearchOpen(!searchOpen)
    }

    // console.log(userData , ' from navbar')

    return(
        <div className="nav-bar">
            <div className="logo-container">
                <NavLink className='logo-img-section' to='/'>
                    <img className="logo-img" src={logo} alt='jiosaavn logo'></img>
                    <h2 className="logo-text">JioSaavn</h2>
                </NavLink>
                {/* <NavLink to="/"><img id="logo-img" src={logo} alt="logo-image"></img></NavLink> */}
            </div>
            <div className="nav-container">
                <ul className="nav-left">
                    <li onMouseEnter={()=> setIsNavMusicHover(true)} onMouseLeave={() => setIsNavMusicHover(false)} ><NavLink className="navlink" to="/">Music</NavLink></li>
                    <li><NavLink className="navlink podcasts" to="/original-podcasts">Podcasts</NavLink></li>
                    <li><NavLink className="navlink" target='_blank' to="/pro">Go Pro</NavLink></li>
                </ul> 
                <div className="nav-center" onClick={OpenSearch}>
                    <IoIosSearch className="search-icon"/>
                    <p id="search-input">Search</p>
                </div>
                <div className="nav-right">
                    <div className="select-lang">
                        <div className="select-div">
                            <p className="music-lang">Music Languages</p>
                            <p className="lang">Hindi</p>
                        </div>
                        {isSelected ? <RiArrowUpSLine className="arrow-icon" /> : <RiArrowDownSLine className="arrow-icon" />}
                    </div>
                    {
                        userData?.userDetails !== null ? 
                        <div className="nav-bar-user-profile" onClick={(e) => handleProfile(e)} >
                            <img className="nav-bar-profile-img" src={profileImg} alt='Profile Image' ></img>
                            {profileSelected ? <RiArrowUpSLine className="arrow-icon" /> : <RiArrowDownSLine className="arrow-icon" />}
                        </div> :
                        <ul className="right-ul">
                            <li><NavLink className="navlink" to="/login">Log In</NavLink></li>
                            <li><NavLink className="navlink" to="/signup">Sign Up</NavLink></li>
                        </ul>
                    }
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default NavBar;