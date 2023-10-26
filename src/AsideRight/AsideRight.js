import React, { useEffect, useState } from 'react'
import './AsideRight.css'
import {BsThreeDots} from 'react-icons/bs'



function AsideRight() {

    const [autoPlay, setAutoPlay] = useState(false);
    const [dataArr, setDataArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [queueData, setQueueData] = useState(null)

    // async function fetchData() {
    //     try {
    //     const res = await fetch(
    //         `https://academics.newtonschool.co/api/v1/music/${queueId.type}/${queueId.id}`,
    //         {
    //         headers: {
    //             projectId: "nwi12vygvqne",
    //         },
    //         }
    //     );

    //     const result = await res.json();
    //     setIsLoading(false);
    //     setDataArr(result.data);
    //     } catch (err) {
    //     console.log(err);
    //     }
    // }

    useEffect(() => {
        setQueueData(sessionStorage.getItem('queueData'))
        // setIsLoading(true);
        // fetchData();
    }, []);

  return (
    <div className='aside-right-section'>
        <div className='aside-right-header'>
            <div className='aside-right-header-title'>Queue</div>
            <div className='aside-right-header-actions'>
                <BsThreeDots className='aside-right more-info' />
                <div className='aside-right save-btn'>Save</div>
                <div className='aside-right clear-btn'>Clear</div>
            </div>
        </div>
        <hr></hr>
        <div className='aside-right-content'>
            <ul className='aside-right-album-container'>
                
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