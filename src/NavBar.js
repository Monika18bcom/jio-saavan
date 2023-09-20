import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { JiosaavanContext } from "./App";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './NavBar.css';
import logo from '../src/img/jio-saavan-logo.png'

// c9v1lq5ej7xf


function NavBar(){
    const {count} = useContext(JiosaavanContext)
    return(
        <div className="nav-bar">
            <div className="logo-container">
                <NavLink to="/"><img id="logo-img" src={logo} alt="logo-image"></img></NavLink>
            </div>
            <div className="nav-container">
                <ul className="nav-left">
                    <li><NavLink className="navlink" to="/">Music</NavLink></li>
                    <li><NavLink className="navlink" to="/podcasts">Podcasts</NavLink></li>
                    <li><NavLink className="navlink" to="/gopro">Go Pro</NavLink></li>
                </ul> 
                <div className="nav-center">
                    <SearchRoundedIcon className="search-icon"/>
                    <p id="search-input">Search</p>
                </div>
                <div className="nav-right">
                    <div className="select-lang">
                        <div className="select-div">
                            <p className="music-lang">Music Languages</p>
                            <p className="lang">Hindi</p>
                        </div>
                        <KeyboardArrowDownOutlinedIcon />
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