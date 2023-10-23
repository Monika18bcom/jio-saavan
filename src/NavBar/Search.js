import React, { useContext, useEffect, useMemo, useReducer, useState } from 'react'
import SearchInput from './SearchInput'
import {MdCancel} from 'react-icons/md'
import './Search.css'
import { JiosaavnContext } from '../App/App'
import SongItem from './SongItem'


function Search() {

  const PROJECT_ID = 'nwi12vygvqne'

  const { setSearchOpen } = useContext(JiosaavnContext)
  const [inputValue , setInputValue] = useState('')

  const [songNum, setSongNum] = useState(true);
  const [songPoster, setSongPoster] = useState(true);
  const [songInfo, setSongInfo] = useState(true);
  const [cancelIcon, setCancelIcon] = useState(true);
  const [likeIcon, setLikeIcon] = useState(true);
  const [durDots, setDurDots] = useState(true);

  const trendingDataReducer = (state , action) => {
    // console.log(action.type , 'action.type')
    // console.log(action.payload)
    switch(action.type){
      case action.type:
        return state.map((e)=>{
          if(e.type === action.type){
            return {...e , data : action.payload}
          }
          else return {...e}
        })
      default:
        return state
    }
  }

  const [trendingData , dispatchTrendingData] = useReducer(trendingDataReducer , [
    {data:[] , type: 'song' },
    {data:[] , type: 'album' },
    {data:[] , type: 'artist' },
  ])

  const trendingArr = useMemo(() => {
    let newArr = [];
    trendingData?.forEach(e => {
      newArr = newArr.concat(e.data)
    });

    return newArr;

  }, [trendingData])

  async function searchFetch(){
    console.log('search fetch called')

    try{
      const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?search={"title":"${inputValue}"}`, {
        headers: {
          'projectID': PROJECT_ID,
        }
      })

      const result = await response.json()
      console.log(result)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{

    if(inputValue.trim() !== ''){
      searchFetch()
    }
    
  },[inputValue])

  async function trendingFetch(e){
    console.log('trending fetch called')
    try{
      const response =await  fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=4`, {
        headers:{
          'projectId': PROJECT_ID,
        }})

      const result = await response.json()
      console.log(result)
      dispatchTrendingData({
        type: e.type ,
        payload : result.data
      })
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{

    trendingData.map((e)=>{
      trendingFetch(e)
    })

  },[])


  return (
    <div className='search-container'>
      <div className='search-input-section'>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

        <span className='search-clear' onClick={()=> setInputValue('')}>Clear</span>
        <MdCancel className='close-icon' onClick={()=>setSearchOpen(false)}/>    
      </div>
      <div className='search-list-section'>
        <div className='trending-container'>
          <h5>TRENDING</h5>
          <div className='song-item-section'>
            {
              trendingArr?.map((e, idx)=>(
                <SongItem key={idx} data={e} songPoster={songPoster} songInfo={songInfo} imgMarginR='11px' />
              ))
            }
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search