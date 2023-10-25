import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Album.css'
import AlbumPoster from '../AlbumPoster/AlbumPoster'
import SongList from '../SongList/SongList'
import Loader from "../Loader/Loader";


function Album() {
  const {type, id} = useParams()

  const [dataArr, setDataArr] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  // const [isSelected , setIsSeleceted] = useState(null)

  async function fetchData(){
    try{
      const res = await fetch(`https://academics.newtonschool.co/api/v1/music/${type}/${id}`, {
        headers: {
          'projectId': 'nwi12vygvqne'
        }
      })

      const result = await res.json()
      setIsLoading(false)
      setDataArr(result.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    setIsLoading(true)
    fetchData()
    
  },[type , id])

  return (
    isLoading ? 
    <div className="album-loader-container">
      <Loader size='60' border='6'  />
    </div> :
    <div className='album-container'>
      <AlbumPoster data={dataArr} type={type}/>

      <div className='album-list'>
        {
          dataArr?.songs?.map((e, id)=>(
            <SongList key={id} data={e} num={id} artistArr={dataArr} />
          ))

          ||
          
          dataArr && <SongList data={dataArr} />
        }
      </div>
        
    </div>
  )
}

export default Album