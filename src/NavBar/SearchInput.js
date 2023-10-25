import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { JiosaavnContext } from "../App/App";
import "./Search.css";

function SearchInput() {

  const { setSearchOpen ,inputValue , setInputValue } = useContext(JiosaavnContext)
  const navigate = useNavigate()

  const handleKeyDown = (e) =>{

    if(e.key === 'Enter' && inputValue.length > 0){

      navigate(`search/song/${inputValue}`)
      setSearchOpen(false)
      setInputValue('')
      console.log('keydown func called')
    }
  }
  return (
    <div className="searchInput-container">
      <IoIosSearch className="search-icon" />
      <input
        type="text"
        autoFocus={true}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
    </div>
  );
}

export default SearchInput;
