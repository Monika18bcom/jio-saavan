import React from "react";
import SongItem from "./SongItem";
import './SearchSuggesstion.css'

function SearchSuggession({ e }) {
  console.log(e);
  return (
    <div className="suggestion-container">
      <div className="header">
        <h5>{`${e.type}s`}</h5>
        <span>View All</span>
      </div>
      <div className="song-list">
        {e?.data?.map((e, idx) => (
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
        ))}
      </div>
    </div>
  );
}

export default SearchSuggession;
