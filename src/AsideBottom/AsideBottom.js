import React, { useState , useContext, useEffect, useReducer } from 'react'
import './AsideBottom.css'
import {IoIosPause} from 'react-icons/io'
import {RiRepeatLine} from 'react-icons/ri'
import {RiRepeatOneFill} from 'react-icons/ri'
import {HiPlay} from 'react-icons/hi2'
import {TbPlayerSkipBackFilled} from 'react-icons/tb'
import {TbPlayerSkipForwardFilled} from 'react-icons/tb'
import {PiShuffleBold} from 'react-icons/pi'
import {BsThreeDots} from 'react-icons/bs'
import {MdVolumeOff} from 'react-icons/md'
import {MdVolumeUp} from 'react-icons/md'
import {GrExpand} from 'react-icons/gr'
import {BsArrowsAngleContract} from 'react-icons/bs'
// import {BsArrowsAngleExpand} from 'react-icons/bs'
import defaultSong from '../song/DefaultAudio.mp3'

import useSound from 'use-sound'
import { JiosaavnContext } from "../App/App";
import ExpandAlbum from './ExpandAlbum'
import { useNavigate } from 'react-router-dom'



function AsideBottom() {

    const { songData , isExpand , setIsExpand } = useContext(JiosaavnContext)
    // console.log("songData", songData)
    const navigate = useNavigate()


    const [isHover, setIsHover] = useState(false);
    const [isRepeat, setIsRepeat] = useState(1)
    const [isPlay, setIsPlay] = useState(true)
    const [isVolume, setIsVolume] = useState(true)
    const [progressWidth, setProgressWidth] = useState(0)

    const [localSongData, setLocalSongData] = useState(null)
    const [songUrl, setSongUrl] = useState(defaultSong)
    const [play , {stop, pause , duration}] = useSound(songUrl)

    const initialDuration = {
        currMin: 0,
        currSec: 0,
        totalMin: 0,
        totalSec: 0,
        totalDuration: 0,
    }

    const durationReducer = (state , action) => {

        switch(action.type){    
            case 'currMin':
                return {...state , currMin : action.payload}
            case 'currSec':
                return {...state , currSec : action.payload}
            case 'totalMin':
                return {...state , totalMin : action.payload}
            case 'totalSec':
                return {...state , totalSec : action.payload}
            case 'totalDuration':
                return {...state , totalDuration : action.payload === 0 ? 0 : state.totalDuration +1}
            default : return state
            
        }

    }

    const [durationState , durationDispatch] = useReducer(durationReducer , initialDuration)

    
    useEffect(()=>{
        // console.log("Time updated", isPlay , duration , durationState.totalDuration)

        const timer = setTimeout(()=>{
            if(!isPlay && duration){
                // console.log("duration updating")
                durationDispatch({
                    type: 'totalDuration',
                })
            }
        },[1000])

        if(durationState.totalDuration > 60){
            let min = Math.floor(durationState.totalDuration / 60)
            let sec = durationState.totalDuration - (Math.floor(durationState.totalDuration / 60) * 60)
            durationDispatch({
                type: 'currMin',
                payload: min,
            })
            durationDispatch({
                type: 'currSec',
                payload: sec,
            })
            }else{
                let sec = Math.floor(durationState.totalDuration)
                durationDispatch({
                    type: 'currSec',
                    payload: sec,
                })
            }

            if(!isPlay){
                setProgressWidth(Math.floor((durationState.totalDuration / Math.floor(duration /1000))*100))   
            }
    
        if(Math.floor(duration/1000) === durationState.totalDuration){
            clearTimeout(timer)
            setIsPlay(true)
            durationDispatch({
                type: 'currMin',
                payload: 0,
            })
            durationDispatch({
                type: 'currSec',
                payload: 0,
            })

            durationDispatch({
                type: 'totalDuration',
                payload: 0,
            })
            setProgressWidth(0)
            // console.log("timer current status" ,timer)
        }

    },[durationState.totalDuration, isPlay , duration])
    
    
    useEffect(()=>{
        stop()
        if(localSongData && duration > 150){
            if(duration > 60000){
            let min = Math.floor(duration / 60000)
            let sec = (duration / 1000)- (Math.floor(duration / 60000) * 60)
            durationDispatch({
                type: 'totalMin',
                payload: min,
            })
            durationDispatch({
                type: 'totalSec',
                payload: sec,
            })
            }else{
                let sec = Math.floor(duration / 1000)
                durationDispatch({
                    type: 'totalSec',
                    payload: sec,
                })
            }
            play()
            setIsPlay(false)
        }
        
    },[duration])

    useEffect(()=>{
        stop()
        setSongUrl(defaultSong)
        if(songData.length >0){
            fetch(`https://academics.newtonschool.co/api/v1/music/song/${songData}`, {
            headers: {
            'projectId': 'nwi12vygvqne'
            }
            })
            .then((res)=> res.json())
            .then((result)=> {
                // console.log(result)
                setLocalSongData(result.data)
                setSongUrl(result.data.audio_url)
                
            })
        }
        
    },[songData])

    const handlePlayBtn = ()=>{
        if(isPlay){
            play()
            setIsPlay(false)
        }else{   
            pause()
            setIsPlay(true)
        }
        console.log('play clicked')
    }

    const handleActions = (e) =>{
        // console.log(e)
        if(e.target.classList.contains('expand-album') || e.target.parentElement.classList.contains('expand-album')){
            console.log('expand clicked')
            console.log(localSongData)
            if(localSongData !== null){
                setIsExpand(true)
            }else{
                console.log("no data")
            }
            
        }
        else if(e.target.classList.contains('contract-album') || e.target.parentElement.classList.contains('contract-album')){
            setIsExpand(false)
        }
    }

    const handleClick = (e) => {
        console.log(e)
        navigate(`/${e.type || 'artist'}/${(e.name) || (e.title)}/${e._id}`)
    }

    // console.log("progressWidth",progressWidth , "%")
    // console.log(durationState)
    // console.log("line 185 asideBottom",localSongData)
    // console.log(isExpand)


  return (
    <div id='aside-bottom' className='aside-bottom-section' style={{top: isExpand && '64px' , height: isExpand && '91%'}}>
        {isExpand && <ExpandAlbum localSongData={localSongData} /> }
        <div className='aside-bottom-progress-bar'>
            <div className='aside-bottom-progress' style={{minWidth: '0', maxWidth: '100%', width: `${progressWidth}%`}}>
                
            </div>
        </div>
        <div className='aside-bottom-content'>
            <div className='aside-bottom-album'>
                { !isExpand &&
                    <>
                        <img className='aside-bottom-img' src={localSongData?.thumbnail} alt={localSongData?.title}></img>
                        <div className='aside-bottom-album-info'>
                            <h4 className='aside-bottom-album-title' style={{color: isHover ? 'black' : '#3e3e3e'}} onClick={()=>handleClick(localSongData)} >{localSongData?.title}</h4>
                            <p className='aside-bottom-album-artist'>
                                {
                                    localSongData?.artist && 
                                    localSongData?.artist.map((e , idx)=> (
                                        <span key={e._id} onClick={()=>handleClick(e)}>{e.name + `${idx < (localSongData.artist.length -1) ? ", " : ""}`}</span>
                                    ))
                                }
                            </p>
                        </div>
                    </>
                }
            </div>
            <ul className='aside-bottom-controls'>
                <li className='aside-bottom-item repeat'>
                    {
                        isRepeat === ( 1 || 2 ) ? <RiRepeatLine /> : <RiRepeatOneFill />
                    }
                </li>
                <li className='aside-bottom-item skip-back'>
                    <TbPlayerSkipBackFilled />
                </li>
                <li className='aside-bottom-item play-pause' onClick={handlePlayBtn} >
                    {
                        isPlay ? <HiPlay /> : <IoIosPause /> 
                    }
                </li>
                <li className='aside-bottom-item skip-fwd'>
                    <TbPlayerSkipForwardFilled />
                </li>
                <li className='aside-bottom-item shuffle'>
                    <PiShuffleBold />
                </li>    
            </ul>
            <ul className='aside-bottom-actions' onClick={(e)=> handleActions(e)} >
                <li className='aside-btm-item duration'>
                    <span id='real-time-duration'>{`${durationState.currMin > 9 ? durationState.currMin : "0"+ durationState.currMin}:${durationState.currSec > 9 ? durationState.currSec : "0"+durationState.currSec}`}</span> / <span id='total-duration'>{`${durationState.totalMin >9 ? durationState.totalMin : "0" + durationState.totalMin}:${durationState.totalSec > 9 ? durationState.totalSec : "0" + durationState.totalSec}`}</span>
                </li>
                <li className='aside-btm-item more-info'>
                    <BsThreeDots />
                </li>
                <li className='aside-btm-item volume'>
                    {
                        isVolume ? <MdVolumeUp /> : <MdVolumeOff />                       
                    }
                </li>
                <li className='aside-btm-item expand' >
                    {isExpand ? <BsArrowsAngleContract className='contract-album' /> : <GrExpand className='expand-album' />}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AsideBottom