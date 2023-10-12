import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainPageContext } from '../App/MainPage'
import Loader from '../Loader/Loader'
import './NavMusic.css'

function NavMusic() {

    const { setIsNavMusicHover } = useContext(MainPageContext)

    const initialData = [
        {title: 'New Releases', data:[] , type: 'song' , limit: '10' , sort : "sort" },
        {title: 'Top Playlists', data:[] , type: 'album' , limit: '10'},
        {title: 'Top Artists', data:[] , type: 'artist', limit: '10'},
    ]

    const navMusicReducer = ( state , action ) =>{
        switch(action.type){
            case action.type:
                return state.map((e) => {
                    if(e.type === action.type){
                        return {...e , data : action.payload}
                    }
                    else return {...e}
                })
            
            default : return state
            
        }
    }

    const [navMusicState, navMusicDispatch] = useReducer(navMusicReducer, initialData)
    const [isHover , setIsHover] = useState('')
    const [isLoading , setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleClick = (e , type) =>{
        console.log(e , type)
        navigate(`/${type}/${(e.name) || (e.title)}/${e._id}`)
        setIsNavMusicHover(false)
    }

    useEffect(()=>{
        setIsLoading(true)
        initialData.map((e)=>{
            if(e.sort){
                
                fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}&sort={"release":1}`, {
                    headers:{
                        'projectId': 'nwi12vygvqne'
                    }}
                )
                .then((response)=> response.json())
                .then((result)=> {
                    navMusicDispatch({
                        type: e.type ,
                        payload : result.data
                    })
                })
            }else {
                fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}` , {
                    headers:{
                        'projectId': 'nwi12vygvqne'
                    }}
                )
                .then((response)=> response.json())
                .then((result)=> {
                    navMusicDispatch({
                        type: e.type ,
                        payload : result.data
                    })
                })
            }
        })
        setIsLoading(false)
    },[])

  return (
    <div className='nav-music-container' onMouseOver={() => setIsNavMusicHover(true)} onMouseLeave={() => setIsNavMusicHover(false)} >
        <h3>What's Hot on JioSaavn</h3>
        {
            isLoading ? <Loader /> :
            <div className='nav-music-collections'>
                {
                    navMusicState?.map((e , idx)=>(     
                    <div key={idx} className='nav-music-type-section' >
                        <h4>{e.title}</h4>
                        <ul>
                            {
                                e.data?.map((x)=>(
                                    <li key={x._id} style={{color: isHover === x._id && '#3e3e3e'}} onClick={()=>handleClick(x , e.type)} onMouseOver={()=> setIsHover(x._id)} onMouseOut={()=> setIsHover('')} >{x.name || x.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
                }
            </div>
        }
    </div>
  )
}

export default NavMusic