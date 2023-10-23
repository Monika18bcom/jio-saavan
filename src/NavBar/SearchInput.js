import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./Search.css";

function SearchInput({ inputValue, setInputValue }) {
  return (
    <div className="searchInput-container">
      <IoIosSearch className="search-icon" />
      <input
        type="text"
        autoFocus={true}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchInput;
