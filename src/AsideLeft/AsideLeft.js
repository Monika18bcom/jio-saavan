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


function AsideLeft(){

    const {userData , setShowModal} = useContext(JiosaavnContext)

    const handleLibrary = (e)=>{
        if( e.target.parentElement.classList.contains('asideLeft-ul') || 
        e.target.classList.contains('library-history') || 
        e.target.parentElement.classList.contains('library-history') || 
        e.target.classList.contains('library-songs') || 
        e.target.parentElement.classList.contains('library-songs') ||
        e.target.classList.contains('library-albums') || 
        e.target.parentElement.classList.contains('library-albums') ||
        e.target.classList.contains('library-podcasts') || 
        e.target.parentElement.classList.contains('library-podcasts') ||
        e.target.classList.contains('library-artists') || 
        e.target.parentElement.classList.contains('library-artists')
        ){
            if(!userData.userToken){
                console.log("setModal")
                setShowModal(true)
            }
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
                    <div className="asideLeft library">
                    <GoHistory className='library-history' />
                    History
                    </div>
                </li>
                <li className='library-songs'>
                    <div className="asideLeft library" >
                    <IoMusicalNoteOutline className='library-songs' />
                    Songs
                    </div>
                </li>
                <li className='library-albums'>
                    <div className="asideLeft library" >
                    <RiAlbumLine className='library-albums' />
                    Albums
                    </div>
                </li>
                <li className='library-podcasts'>
                    <div className="asideLeft library" >
                    <MdPodcasts className='library-podcasts' />
                    Podcasts
                    </div>
                </li>
                <li className='library-artists'>
                    <div className="asideLeft library" >
                    <LiaMicrophoneAltSolid className='library-artists' />
                    Artists
                    </div>
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