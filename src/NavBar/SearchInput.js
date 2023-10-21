import React from 'react'
import {IoIosSearch} from 'react-icons/io'
import './Search.css'


function SearchInput() {
  return (
    <div className='searchInput-container'>
        <IoIosSearch className='search-icon' />
        <input type='text' className='search-input' />
    </div>
  )
}

export default SearchInput