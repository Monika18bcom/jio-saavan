import React, { useContext } from 'react'
import SearchInput from './SearchInput'
import {MdCancel} from 'react-icons/md'
import './Search.css'
import { JiosaavnContext } from '../App/App'


function Search() {

    const { setSearchOpen , searchOpen } = useContext(JiosaavnContext)

    const searchClose = () =>{
        setSearchOpen(!searchOpen)
    }
  return (
    <div className='search-container'>
        <div className='search-input-section'>
            <SearchInput />
            <span className='search-clear'>Clear</span>
            <MdCancel className='close-icon' onClick={searchClose}/>    
        </div>
        <div className='search-list-section'>

        </div>
    </div>
  )
}

export default Search