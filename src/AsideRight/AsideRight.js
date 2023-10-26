import React, { useEffect, useState } from 'react'
import './AsideRight.css'
import {BsThreeDots} from 'react-icons/bs'
import SongItem from '../NavBar/SongItem';



function AsideRight() {

    const [autoPlay, setAutoPlay] = useState(false);
    
    const [queueData, setQueueData] = useState(null)

    useEffect(() => {
        const data = sessionStorage.getItem('queueData');
        if (data) {
            setQueueData(JSON.parse(data))
        }
    }, [queueData]);

    const clearQueue = () =>{
        // console.log('clear btn clicked')
        sessionStorage.removeItem('queueData')
    }

    // console.log('queueData',queueData)

  return (
    <div className='aside-right-section'>
        <div className='aside-right-header'>
            <div className='aside-right-header-title'>Queue</div>
            <div className='aside-right-header-actions'>
                <BsThreeDots className='aside-right more-info' />
                <div className='aside-right save-btn'>Save</div>
                <div className='aside-right clear-btn' onClick={clearQueue}>Clear</div>
            </div>
        </div>
        <hr></hr>
        <div className='aside-right-content'>
            <ul className='aside-right-album-container'>
                {queueData?.data?.songs?.map((e, id) => (
                    <SongItem
                    key={id}
                    data={e}
                    artistArr={queueData.data}
                    // queue={true}
                    songPoster={true}
                    songInfo={true}
                    likeIcon={true}
                    durDots={true}
                    songList={true}
                    cancelIcon={true}
                    padding='10px 15px'
                    songInfoMarginR="11px"
                    cancelIconMarginR='11px'
                    bg="#fff"
                    border="1px solid #e9e9e9"
                    imgMarginR="11px"
                    likeIconMarginR="11px"
                    width="100%"
                    height='64px'
                    playCur="pointer"
                    titleCur="pointer"
                    typeCur="pointer"
                    />
                )) ||
                (queueData?.data && 
                    <SongItem 
                    data={queueData.data}
                    // queue={true}
                    songPoster={true}
                    songInfo={true}
                    likeIcon={true}
                    durDots={true}
                    songList={true}
                    cancelIcon={true}
                    padding='10px 15px'
                    songInfoMarginR="11px"
                    cancelIconMarginR='11px'
                    bg="#fff"
                    border="1px solid #e9e9e9"
                    imgMarginR="11px"
                    likeIconMarginR="11px"
                    width="100%"
                    height='64px'
                    playCur="pointer"
                    titleCur="pointer"
                    typeCur="pointer"
                    />
                )}
            </ul>
            {
                autoPlay &&
                <>
                    <div className='aside-right-checkbox'>
                    <label htmlFor="a-r-checkbox">
                        Autoplay more like this.
                        <input id='a-r-checkbox' type='checkbox'/>
                    </label>

                    </div>
                    <ul className='aside-right-album-container'>
                    
                    </ul>
                </>
            }
            
        </div>
    </div>
  )
}

export default AsideRight