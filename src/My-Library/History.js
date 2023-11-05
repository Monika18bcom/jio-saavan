import React from 'react'
import ComingSoon from './ComingSoon'
import './History.css'
import MyMusicHeader from './MyMusicHeader'


function History() {
  return (
    <div className='history-container'>
      <MyMusicHeader />
      <div className='coming-soon'><ComingSoon /></div>
    </div>
  )
}

export default History