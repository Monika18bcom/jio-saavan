import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { JiosaavnContext } from "../App/App";
import MusicCard from "../MusicCard/MusicCard";
import "./SearchComp.css";
import SongItem from "./SongItem";

function SearchComp() {
  const { type, input } = useParams();
  const { sArr, searchState } = useContext(JiosaavnContext);

//   console.log(searchState, "sArr");

  return (
    <div className="search-comp-container">
      <p className="header" >
        Search results for <strong>{input}</strong>
      </p>
      {
        searchState.map((e , idx)=>(   
            type === e.type && <p className="results" key={idx}>{e?.data?.length > 1 ? `${e?.data?.length} results` : `0 result` }</p>   
        ))
      }
      <ul className="sub-header-ul">
        <li>
          <NavLink to={`/search/song/${input}`}>Songs</NavLink>
        </li>
        <li>
          <NavLink to={`/search/album/${input}`}>Albums</NavLink>
        </li>
        <li>
          <NavLink to={`/search/artist/${input}`}>Artists</NavLink>
        </li>
      </ul>
      {searchState.map(
        (e, idx) =>
          type === e?.type && (
            <div className="song-list-section" key={idx} style={{display: type !== 'song' && 'flex' , flexWrap: type !== 'song' && 'wrap' , gap: type !== 'song' && '20px'  }}>
              {
                (e?.data?.length < 1 || !e.data) ?
                <p>{`No ${type}s found`}</p> :
                e?.data?.map((data, idx) => (
                    type === 'song' ?
                    <SongItem
                      key={idx}
                      data={data}
                      songNum={true}
                      songPoster={true}
                      songInfo={true}
                      likeIcon={true}
                      durDots={true}
                      num={idx}
                      songList={true}
                      songInfoFD='row'
                      songInfoAI='center'
                      songInfoJC='flex-start'
                      songInfoMarginR='22px'
                      songlistWidth='50%'
                      bg='#fff'
                      borderR='4px'
                      border='1px solid #e9e9e9'
                      imgMarginR="22px"
                      width="100%"
                      height='64px'
                      playCur="pointer"
                      titleCur="pointer"
                      typeCur="pointer"
                    /> :
                    <MusicCard key={idx} data={{...data, type: e.type}} cardWidth='134px' imgWidth='134px' imgHeight='134px' /> 
                  ))
              }
            </div>
          )
      )}
    </div>
  );
}

export default SearchComp;
