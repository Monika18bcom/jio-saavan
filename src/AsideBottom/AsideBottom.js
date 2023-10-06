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
import defaultSong from '../song/DefaultAudio.mp3'

import useSound from 'use-sound'
import { JiosaavnContext } from "../App/App";



function AsideBottom() {

    const [isHover, setIsHover] = useState(false);
    const [isRepeat, setIsRepeat] = useState(1)
    const [isPlay, setIsPlay] = useState(true)
    const [isVolume, setIsVolume] = useState(true)
    const [progressWidth, setProgressWidth] = useState(0)

    const {songData, setSongData} = useContext(JiosaavnContext)
    // console.log("songData", songData)
    const [localSongData, setLocalSongData] = useState({})
    const [songUrl, setSongUrl] = useState(defaultSong)

    const initialDuration = {
        currMin: "00",
        currSec: "00",
        totalMin: "00",
        totalSec: "00"
    }

    

    const durationReducer = (state , action) => {
        console.log(action.type)

        switch(action.type){    
            case 'currMin':
                return {...state , currMin : action.payload}
            case 'currSec':
                return {...state , currSec : action.payload}
            case 'totalMin':
                return {...state , totalMin : action.payload}
            case 'totalSec':
                return {...state , totalSec : action.payload}
            default : return state
            
        }

    }

    const [durationState , durationDispatch] = useReducer(durationReducer , initialDuration)

    const [play , {stop, pause , duration}] = useSound(songUrl)

    const [dur , setDur] = useState(0)
    
    useEffect(()=>{

        const timer = setTimeout(()=>{
           setDur((prev)=> prev+1)
            console.log(dur+1)
        },[1000])
    
        if(Math.floor(duration/1000) === dur){
            clearTimeout(timer)
            console.log("timer current status" ,timer)
        }
    },[dur , duration])
    
    
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
        // console.log("songData", songData)
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
        }else{   
            pause()
        }
        setIsPlay(!isPlay)
        console.log('play clicked')
    }


    console.log(durationState)
  return (
    <div id='aside-bottom' className='aside-bottom-section'>
        <div className='aside-bottom-progress-bar'>
            <div className='aside-bottom-progress' style={{minWidth: '0', maxWidth: '100%', width: `${progressWidth}%`}}>
                
            </div>
        </div>
        <div className='aside-bottom-content'>
            <div className='aside-bottom-album'>
                <img className='aside-bottom-img' src={localSongData?.thumbnail} alt={localSongData?.title}></img>
                <div className='aside-bottom-album-info'>
                    <h4 className='aside-bottom-album-title' style={{color: isHover ? 'black' : '#3e3e3e'}} >{localSongData?.title}</h4>
                    <p className='aside-bottom-album-artist'>{localSongData?.artist && localSongData?.artist.map((e)=> e.name).join(',')}</p>
                </div>
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
            <ul className='aside-bottom-actions'>
                <li className='aside-btm-item duration'>
                    <span id='real-time-duration'>{`${durationState.currMin}:${durationState.currSec}`}</span> / <span id='total-duration'>{`${durationState.totalMin}:${durationState.totalSec}`}</span>
                </li>
                <li className='aside-btm-item more-info'>
                    <BsThreeDots />
                </li>
                <li className='aside-btm-item volume'>
                    {
                        isVolume ? <MdVolumeUp /> : <MdVolumeOff />                       
                    }
                </li>
                <li className='aside-btm-item expand'>
                    <GrExpand />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AsideBottom