import {AiOutlinePlus} from 'react-icons/ai'
import {GoHistory} from 'react-icons/go'
import {IoMusicalNoteOutline} from 'react-icons/io5'
import {RiAlbumLine} from 'react-icons/ri'
import {MdPodcasts} from 'react-icons/md'
import {LiaMicrophoneAltSolid} from 'react-icons/lia'
import { NavLink } from "react-router-dom";
import './AsideLeft.css'


function AsideLeft(){
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
            <ul className='asideLeft-ul'>
                <li>
                    <NavLink className="asideLeft library" to="listening-history">
                    <GoHistory />
                    History
                    </NavLink>
                </li>
                <li>
                    <NavLink className="asideLeft library" to="songs">
                    <IoMusicalNoteOutline />
                    Songs
                    </NavLink>
                </li>
                <li>
                    <NavLink className="asideLeft library" to="albums">
                    <RiAlbumLine />
                    Albums
                    </NavLink>
                </li>
                <li><NavLink className="asideLeft library" to="podcasts">
                    <MdPodcasts />
                    Podcasts
                </NavLink></li>
                <li><NavLink className="asideLeft library" to="artists">
                    <LiaMicrophoneAltSolid />
                    Artists
                </NavLink></li>
            </ul>
            <div id="new-playlist" className='asideLeft-new-playlist'>
                <AiOutlinePlus />
                New Playlist
            </div>
        </div>
    )
}


export default AsideLeft;