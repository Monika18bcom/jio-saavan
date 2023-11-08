import React, { useEffect } from 'react'
import ComingSoon from './ComingSoon'
import './History.css'
import MyMusicHeader from './MyMusicHeader'


function History() {
  
  useEffect(()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
  },[])
  
  return (
    <div className='history-container'>
      <MyMusicHeader />
      <ComingSoon />
    </div>
  )
}

export default History