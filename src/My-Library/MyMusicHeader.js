import React from 'react'
import './MyMusicHeader.css'

function MyMusicHeader() {

    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'

  return (
    <div className='my-music-header-container'>
        <div className='my-music-header-user-profile'>
            <div className='my-music-header-img-section'>
                <div className='profile-img'>
                    <img src={profileImg} alt='Profile Image' ></img>
                </div>
                <div className='user-name'>
                    <h2>UserName</h2>
                    <h3>Free</h3>
                    <span>Go Pro</span>
                </div>
            </div>
            <div className='my-music-header-logout-section'>
                <div className='logout-btn'>Log Out</div>
            </div>
        </div>
        <div className='my-music-header-user-library'>
            <ul className='library-ul'>
                <li>Playlists</li>
                <li>Songs</li>
                <li>Albums</li>
                <li>Podcasts</li>
                <li>Artists</li>
                <li>History</li>
            </ul>
            <div className='library-btns'>
                <span className='sync-library'>Sync Library</span>
                <span className='shuffle-all'>Shuffle All</span>
            </div>
        </div>
        <div className='my-music-header-usermusic-data'>
            <p><span>count</span><span>type</span></p>
            <div className='filter-search'>
                icon
                <input></input>
            </div>
        </div>
    </div>
  )
}

export default MyMusicHeader