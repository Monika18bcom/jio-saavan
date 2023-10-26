import './MusicCard.css'
import { useState , useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {AiFillHeart} from 'react-icons/ai'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

import { JiosaavnContext } from "../App/App";
import { useNavigate } from 'react-router-dom'


function MusicCard({data  , cardWidth , imgHeight}){

    // console.log(data , 'music card data')

    const [isHover, setIsHover] = useState(false);
    const [isLikeRed, setIsLikeRed] = useState(false);
    const navigate = useNavigate()
    
    const {setSongId} = useContext(JiosaavnContext);

    const handleMouseOver = ()=>{
        setIsHover(true);
    }

    const handleMouseOut = ()=>{
        setIsHover(false);
    }

    const handleMusicCardControls = (e)=>{
        if(e.target.classList.contains('music-card-play-btn-bg') || e.target.classList.contains('music-card-play-btn') || e.target.parentElement.classList.contains('music-card-play-btn')){
            setSongId(null)
            if(data.type === "song"){
                console.log(data , 'song')
                setSongId(data._id)
                sessionStorage.setItem('queueData' , JSON.stringify({ data: data , type: 'song' }))
                // sessionStorage.setItem('queueData' , JSON.stringify({ id: data._id , type: 'song' }))
            }else if(data.type === "album"){
                console.log(data , 'album')
                setSongId(data?.songs[0]._id)
                sessionStorage.setItem('queueData' , JSON.stringify({ data: data , type: 'album' }))
            }else{
                console.log(data, 'artist')
                setSongId(data.songs[0])
                sessionStorage.setItem('queueData' , JSON.stringify({ data: data , type: 'artist' }))
            }
                       
        }else if(e.target.classList.contains('music-card-like-btn') || e.target.parentElement.classList.contains('music-card-like-btn')){
            setIsLikeRed(!isLikeRed);
        }else if(e.target.classList.contains('music-card-option-btn') || e.target.parentElement.classList.contains('music-card-option-btn')){
            
        }else{
            navigate(`/${data.type}/${(data.name) || (data.title)}/${data._id}`)
        }
    }

    const handleClick = (data) => {
        navigate(`/${data.type}/${(data.name) || (data.title)}/${data._id}`)
    }

    return (
        <div className='music-card-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{width : cardWidth}} >
            <div className='music-card-img' style={{backgroundImage:`url(${data.image || data.thumbnail})`, borderRadius : data.type === "artist" && '50%', height: imgHeight}}>
                {
                    isHover &&
                    <div className='music-card-controls' style={{borderRadius : data.type === "artist" && '50%'}} onClick={(e) => handleMusicCardControls(e)}>
                        <div className='music-card-play'>
                            <div className='music-card-play-btn-bg'>
                                <FontAwesomeIcon className='music-card-play-btn' icon={faPlay} style={{color: '#fff' , textAlign:'center'}} />
                            </div>
                        </div>
                        {
                            data.type !== "artist" &&
                            <div className='music-card-heart-ellipsis'>
                            {
                                isLikeRed ? 
                                <AiFillHeart className='music-card-like-btn' style={{color: 'red'}} /> : 
                                <FontAwesomeIcon className='music-card-like-btn' icon={faHeart} style={{color: '#fff'}} />
                            }
                            <FontAwesomeIcon className='music-card-option-btn' icon={faEllipsis} style={{color: '#fff'}} />
                            </div>
                        }
                    </div>
                }
            </div>
            <div className='music-card-info'>
                <h4 className='music-card-title' onClick={()=>handleClick(data)}>
                    {
                        data.title || data.name
                    }
                </h4>
                <p className='music-card-artist'>   
                    {
                        data?.artist?.map((e , idx) => (
                            <span key={e._id} className={e._id} onClick={()=>handleClick(e)}>{e.name + `${idx < (data.artist.length -1) ? ", " : ""}`}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}



export default MusicCard;