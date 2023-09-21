import React from 'react'
import './Album.css'
import AlbumPoster from '../AlbumPoster/AlbumPoster'
import SongList from '../SongList/SongList'

function Album() {
  return (
    <div className='album-container'>
        <AlbumPoster />
        <SongList />
    </div>
  )
}

export default Album