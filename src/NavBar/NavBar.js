import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import { JiosaavnContext } from "../App/App";
import './NavBar.css';
import logo from '../img/jio-saavn-logo.png'
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import {IoIosSearch} from 'react-icons/io'


function NavBar({setIsNavMusicHover}){
    const {count} = useContext(JiosaavnContext)
    const [isSelected, setIsSelected] = useState(false)

    return(
        <div className="nav-bar">
            <div className="logo-container">
                <NavLink to="/"><img id="logo-img" src={logo} alt="logo-image"></img></NavLink>
            </div>
            <div className="nav-container">
                <ul className="nav-left">
                    <li onMouseEnter={()=> setIsNavMusicHover(true)} onMouseLeave={() => setIsNavMusicHover(false)} ><NavLink className="navlink" to="/">Music</NavLink></li>
                    <li><NavLink className="navlink podcasts" to="/original-podcasts">Podcasts</NavLink></li>
                    <li><NavLink className="navlink" to="/gopro">Go Pro</NavLink></li>
                </ul> 
                <div className="nav-center">
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
                    <ul className="right-ul">
                        <li><NavLink className="navlink" to="/login">Log In</NavLink></li>
                        <li><NavLink className="navlink" to="/signup">Sign Up</NavLink></li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
}

export default NavBar;