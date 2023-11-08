import React, { useContext, useEffect, useRef, useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'
import { JiosaavnContext } from '../App/App'

import './OptionsModal.css'


function OptionsModal() {

  const {showOption , setShowOption , setShowErrorComp , optionsData , setOptionsData , setSongId , setUpdateQueue} = useContext(JiosaavnContext)

  const [mainOptions , setMainOptions] = useState(true)
  const [linkCopied , setLinkCopied] = useState(false)


  const optionRef = useRef()

  const firstRef = useRef(false)

  const scrollFunc = () =>{
    setShowOption(false)
  }

  const clickFunc = (e) =>{
    // console.log('clicked' , e , optionRef)
    if(!firstRef.current){
      firstRef.current = true;
      return;
    }

    if(!optionRef.current.contains(e.target)){
      setShowOption(false)
    }
  }

  useEffect(()=>{
    
    window.addEventListener('scroll', scrollFunc)

    window.addEventListener('click', clickFunc)

    return () =>{
      window.removeEventListener('scroll', scrollFunc)
      window.removeEventListener('click', clickFunc)
    }
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setLinkCopied(false)
    },900)

  },[linkCopied])

  const handlePlayNow = () => {
    setSongId(null)
    setTimeout(()=>{
      if(optionsData?.type === "song"){
        setSongId(optionsData?._id)
        
        sessionStorage.setItem('queueData' , JSON.stringify({ data: optionsData , type: 'song' }))
        setUpdateQueue(optionsData?._id)

      }else if(optionsData?.type === "album"){
        setSongId(optionsData?.songs[0]._id)

        sessionStorage.setItem('queueData' , JSON.stringify({ data: optionsData , type: 'album' }))
        setUpdateQueue(optionsData?._id)
      }else{
        setSongId(optionsData?.songs[0])

        sessionStorage.setItem('queueData' , JSON.stringify({ data: optionsData , type: 'artist' }))
        setUpdateQueue(optionsData?._id)
      }
    },500)
  }

  const handleErrorComp = (e) => {
    setShowErrorComp(`${e.target.innerText} in progress...`)
  }

  const copyToClipboard = () =>{
    const text = `https://jio-saavan-ten.vercel.app/${optionsData.type}/${(optionsData.name) || (optionsData.title)}/${optionsData._id}`
    navigator.clipboard.writeText(text)
    setLinkCopied(true)
  }

  const toggleOptions = (e) => {
    // console.log(e.target.parentElement.classList)
    // setMainOptions(false)
    // ()=> setMainOptions(true)

    // console.log(mainOptions , "toggle func clicked")

    if(e.target.parentElement.classList.contains('share') || e.target.classList.contains('share')){
      console.log("share class")
      setMainOptions(false) 
    }

    if(e.target.parentElement.classList.contains('back-btn') || e.target.classList.contains('back-btn')){
      console.log("back-btn class")
      setMainOptions(true) 
    }
  }

  console.log(mainOptions , "mainOptions")

  // console.log(optionsData , "optionsData")

  return (
    <div className='options-modal-container' ref={optionRef} style={{top:showOption?.top , left:showOption?.left}} >
        
      {
        mainOptions ?
        <ul className='options-modal-ul-1'>
          <li className='play-now' onClick={handlePlayNow}>Play Album Now</li>
          <li className='save-to-lib' onClick={handleErrorComp}>Save to Library</li>
          <li className='add-to-queue' onClick={handleErrorComp}>Add to Queue</li>
          <li className='add-to-playlists' onClick={handleErrorComp}>Add to Playlists</li>
          <li className='share' onClick={()=> setMainOptions(false) }>
            <span>Share</span>
            <IoIosArrowForward className='frw-arrow' />
          </li>
        </ul> :
        <ul className='options-modal-ul-2'>
          <li className='back-btn' onClick={toggleOptions} >
            <IoIosArrowBack className='back-arrow' />
            <span>Back</span>
          </li>
          <li className='copy-link' onClick={copyToClipboard}>{linkCopied ? "Link Copied👍" : "Copy Link"}</li>
          <li className='twitter' onClick={()=> window.open("https://twitter.com/JioSaavn", '_blank')}>Twitter</li>
          <li className='facebook' onClick={()=> window.open("https://www.facebook.com/JioSaavn", '_blank')}>Facebook</li>
          <li className='email' onClick={()=> window.open('mailto:jiosaavn@gmail.com')}>Email</li>
        </ul>
      }  
    </div>
  )
}

export default OptionsModal