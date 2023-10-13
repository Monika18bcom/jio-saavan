import React from 'react'
import MyMusicHeader from './MyMusicHeader'
import './MyMusic.css'
import ComingSoon from './ComingSoon'

function MyMusic() {

  return (
    <div className='my-music-main-container'>
        <MyMusicHeader />
        <ComingSoon />
    </div>
  )
}

export default MyMusic