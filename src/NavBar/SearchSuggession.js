import React, { useContext } from "react";
import SongItem from "./SongItem";
import './SearchSuggesstion.css'
import { useNavigate } from "react-router-dom";
import { JiosaavnContext } from "../App/App";

function SearchSuggession({ e , inputValue}) {
  console.log(e.data , 'e.data');
  const navigate = useNavigate()
  const {setSearchOpen} = useContext(JiosaavnContext)

  const handleNavigate = () =>{
    navigate(`search/${e.type}/${inputValue}`)
    // setSArr(e)
    setSearchOpen(false)
  }
  return (
    <div className="suggestion-container">
      <div className="header">
        <h5>{`${e.type}s`}</h5>
        <span onClick={handleNavigate}>View All</span>
      </div>
      <div className="song-list">
        {
          (e?.data?.length < 1 || !e.data) ?
          <p>{`No ${e.type}s found`}</p> :
          e?.data?.map((e, idx) => (
            idx < 4 &&
            <SongItem
              key={idx}
              data={e}
              songPoster={true}
              songInfo={true}
              imgMarginR="11px"
              width="215px"
              playCur="pointer"
              titleCur="pointer"
            />
          ))
        }
      </div>
    </div>
  );
}

export default SearchSuggession;
