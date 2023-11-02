import React, { useContext, useEffect } from 'react'
import MyMusicHeader from './MyMusicHeader'
import './MyMusic.css'
import { JiosaavnContext } from "../App/App";
import ComingSoon from './ComingSoon'
import { useNavigate } from 'react-router-dom';

function MyMusic() {

  const { userData } = useContext(JiosaavnContext)
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
  },[])

  useEffect(()=>{

    if(!userData.userToken){
      
      navigate('/') 
    }

  },[])


  return (
    <div className='my-music-main-container'>
        <MyMusicHeader />
        <ComingSoon />
    </div>
  )
}

export default MyMusic