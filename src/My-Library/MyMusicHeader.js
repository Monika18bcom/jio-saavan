import React from 'react'

function MyMusicHeader() {

    const profileImg = 'https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-150x150.jpg'

  return (
    <div className='my-music-header-container'>
        <div>
            <div>
                <div>
                    <img src={profileImg} alt='Profile Image' ></img>
                </div>
                <div>
                    <h2>UserName</h2>
                    <h3>FREE</h3>
                    <span>Go Pro</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Log Out</span>
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li>Playlists</li>
                <li>Songs</li>
                <li>Albums</li>
                <li>Podcasts</li>
                <li>Artists</li>
                <li>History</li>
            </ul>
            <div>
                <span>Sync Library</span>
                <span>Shuffle All</span>
            </div>
        </div>
        <div>
            <p><span>count</span><span>type</span></p>
            <div>
                icon
                <input></input>
            </div>
        </div>
    </div>
  )
}

export default MyMusicHeader