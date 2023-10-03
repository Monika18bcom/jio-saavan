import {AiOutlinePlus} from 'react-icons/ai'
import {GoHistory} from 'react-icons/go'
import {IoMusicalNoteOutline} from 'react-icons/io5'
import {RiAlbumLine} from 'react-icons/ri'
import {MdPodcasts} from 'react-icons/md'
import {LiaMicrophoneAltSolid} from 'react-icons/lia'
import { NavLink } from "react-router-dom";
import './AsideLeft.css'
import { useContext } from 'react'
import { JiosaavnContext } from '../App/App'
import Modal from '../Modal/Modal'
import LogIn from '../Form/LogIn'


function AsideLeft(){

    const {isUserLogin , setShowModal} = useContext(JiosaavnContext)

    const handleLibrary = (e)=>{
        if(e.target.classList.contains('library-history') || e.target.parentElement.classList.contains('library-history') ){
            console.log("History")
            if(!isUserLogin){
                console.log("setModal")
                setShowModal(true)
                // <Modal > <LogIn loginType="login" /> </Modal>
            }
        }
        else if(e.target.classList.contains('library-songs') || e.target.parentElement.classList.contains('library-songs') ){
            console.log("songs")
        }
        else if(e.target.classList.contains('library-albums') || e.target.parentElement.classList.contains('library-albums') ){
            console.log("albums")
        }
        else if(e.target.classList.contains('library-podcasts') || e.target.parentElement.classList.contains('library-podcasts') ){
            console.log("podcasts")
        }
        else if(e.target.classList.contains('library-artists') || e.target.parentElement.classList.contains('library-artists') ){
            console.log("artists")
        }

    }

    return (
        <div id="asideLeft-div">
            <h3>Browse</h3>
            <ul className='asideLeft-ul'>
                <li><NavLink className="asideLeft browse" to="new-releases">New Releases</NavLink></li>
                <li><NavLink className="asideLeft browse" to="top-charts">Top Charts</NavLink></li>
                <li><NavLink className="asideLeft browse" to="top-playlists">Top Playlists</NavLink></li>
                <li><NavLink className="asideLeft browse" to="original-podcasts">Podcasts</NavLink></li>
                <li><NavLink className="asideLeft browse" to="top-artists">Top Artists</NavLink></li>
                <li><NavLink className="asideLeft browse" to="radio">Radio</NavLink></li>
            </ul>
            <h3>Library</h3>
            <ul className='asideLeft-ul' onClick={e => handleLibrary(e)}>
                <li className='library-history'>
                    <NavLink className="asideLeft library" to="listening-history">
                    <GoHistory className='library-history' />
                    History
                    </NavLink>
                </li>
                <li className='library-songs'>
                    <NavLink className="asideLeft library" to="songs">
                    <IoMusicalNoteOutline className='library-songs' />
                    Songs
                    </NavLink>
                </li>
                <li className='library-albums'>
                    <NavLink className="asideLeft library" to="albums">
                    <RiAlbumLine className='library-albums' />
                    Albums
                    </NavLink>
                </li>
                <li className='library-podcasts'>
                    <NavLink className="asideLeft library" to="podcasts">
                    <MdPodcasts className='library-podcasts' />
                    Podcasts
                    </NavLink>
                </li>
                <li className='library-artists'>
                    <NavLink className="asideLeft library" to="artists">
                    <LiaMicrophoneAltSolid className='library-artists' />
                    Artists
                    </NavLink>
                </li>
            </ul>
            <div id="new-playlist" className='asideLeft-new-playlist'>
                <AiOutlinePlus />
                New Playlist
            </div>
        </div>
    )
}


export default AsideLeft;