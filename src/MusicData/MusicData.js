import { useRef, useState } from "react";
import MusicCard from "../MusicCard/MusicCard";
import './MusicData.css'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

function MusicData({album}){

    const [isArrowHover, setIsArrowHover] = useState(false);
    const [isALDisabled ,setIsALDisabled] = useState(true)
    //AL -> Arrow Left
    const [isARDisabled ,setIsARDisabled] = useState(false)
    //AR -> Arrow Right
    const musicDataRef = useRef()

    const handleArrowMouseOver = ()=>{
        setIsArrowHover(true)
    }

    const handleArrowMouseOut = ()=>{
        setIsArrowHover(false)
    }

    const handleRightArrow = ()=>{
        musicDataRef.current.scrollBy({left:musicDataRef.current.offsetWidth, behavior:"smooth"})
    }

    const handleLeftArrow = ()=>{
        musicDataRef.current.scrollBy({left:- musicDataRef.current.offsetWidth, behavior:"smooth"})
    }


    return (
        <div className="music-data-section" onMouseOver={handleArrowMouseOver} onMouseOut={handleArrowMouseOut}>
            <div className="music-data-arrow">
                {
                    isArrowHover && 
                    <span id="left-arrow" 
                    className="music-data-controls" 
                    onClick={handleLeftArrow}  
                    disabled={isALDisabled} 
                    style={{cursor: isALDisabled ? "auto" : "pointer", opacity: isALDisabled && "0.12"}}>
                        <IoIosArrowBack />
                    </span>
                }
            </div>           
            <div className="music-data-container" 
                onScroll={()=>{
                    if(musicDataRef.current.scrollLeft > 0){
                        setIsALDisabled(false)
                    }else{
                        setIsALDisabled(true)
                    }

                    if((musicDataRef.current.scrollWidth - (musicDataRef.current.scrollLeft + musicDataRef.current.offsetWidth)) > 0){
                        setIsARDisabled(false)
                    }else{
                        setIsARDisabled(true)
                    }
                }}
                ref={musicDataRef} >
                <div className="music-data-row-1">
                    {album?.data?.map((e,idx)=>(
                        idx < 20 && <MusicCard key={idx} data={{...e, type: album.type}}/>
                    ))}
                </div>
                <div className="music-data-row-2">
                    {album?.data?.map((e,idx)=>(
                       idx >= 20 && <MusicCard key={idx} data={{...e, type: album.type}}/>
                    ))}
                </div>
            </div> 
            <div className="music-data-arrow">
                {
                    isArrowHover && 
                    <span id="right-arrow" 
                    className="music-data-controls" 
                    onClick={handleRightArrow} 
                    disabled={isARDisabled} 
                    style={{cursor: isARDisabled ? "auto" : "pointer", opacity: isARDisabled && "0.12"}}>
                        <IoIosArrowForward />
                    </span>
                }
            </div>
        </div>
    )
}

export default MusicData;