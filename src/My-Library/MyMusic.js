import React from 'react'
import MyMusicHeader from './MyMusicHeader'
import './MyMusic.css'

function MyMusic() {

  return (
    <div className='my-music-main-container'>
        <MyMusicHeader />
        <ul>
          <li>This</li>
          <li>is</li>
          <li>a</li>
          <li>dummy</li>
          <li>ul</li>
          <li>list</li>
          <li>items</li>
        </ul>
    </div>
  )
}

export default MyMusic