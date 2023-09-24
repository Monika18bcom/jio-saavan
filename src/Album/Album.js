import React, { useEffect, useState } from 'react'
import './Album.css'
import AlbumPoster from '../AlbumPoster/AlbumPoster'
import SongList from '../SongList/SongList'
import { useParams } from 'react-router-dom'

function Album() {
  const {type, id} = useParams()

  const [dataArr, setDataArr] = useState([])

  async function fetchData(){
    try{
      const res = await fetch(`https://academics.newtonschool.co/api/v1/music/${type}/${id}`, {
        headers: {
          'projectId': 'nwi12vygvqne'
        }
      })

      const result = await res.json()
      console.log(result)
      setDataArr(result.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
    
  },[])
  return (
    <div className='album-container'>
      <AlbumPoster />

      <div className='album-list'>
        <SongList />
      </div>
        
    </div>
  )
}

export default Album