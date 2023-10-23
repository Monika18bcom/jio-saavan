import React, { useContext, useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import {MdCancel} from 'react-icons/md'
import './Search.css'
import { JiosaavnContext } from '../App/App'


function Search() {

  const PROJECT_ID = 'nwi12vygvqne'

    const { setSearchOpen , searchOpen } = useContext(JiosaavnContext)
    const [inputValue , setInputValue] = useState('')

    // console.log('inputValue', inputValue)

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

    const searchClose = () =>{
        setSearchOpen(!searchOpen)
    }
  return (
    <div className='search-container'>
        <div className='search-input-section'>
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
            <span className='search-clear'>Clear</span>
            <MdCancel className='close-icon' onClick={searchClose}/>    
        </div>
        <div className='search-list-section'>

        </div>
    </div>
  )
}

export default Search