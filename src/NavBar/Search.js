import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import SearchInput from "./SearchInput";
import { MdCancel } from "react-icons/md";
import "./Search.css";
import { JiosaavnContext } from "../App/App";
import SongItem from "./SongItem";
import Loader from "../Loader/Loader";
import SearchSuggession from "./SearchSuggession";

function Search() {
  const PROJECT_ID = "nwi12vygvqne";

  const { setSearchOpen } = useContext(JiosaavnContext);
  const searchRef = useRef()
  const [firstRender , setFirstRender] = useState(false)

  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [songNum, setSongNum] = useState(true);
  const [songPoster, setSongPoster] = useState(true);
  const [songInfo, setSongInfo] = useState(true);
  const [cancelIcon, setCancelIcon] = useState(true);
  const [likeIcon, setLikeIcon] = useState(true);
  const [durDots, setDurDots] = useState(true);

  const trendingDataReducer = (state, action) => {
    switch (action.type) {
      case action.type:
        return state.map((e) => {
          if (e.type === action.type) {
            setIsLoading(false);
            return { ...e, data: action.payload };
          } else return { ...e };
        });
      default:
        return state;
    }
  };

  const [trendingData, dispatchTrendingData] = useReducer(trendingDataReducer, [
    { data: [], type: "song" },
    { data: [], type: "album" },
    { data: [], type: "artist" },
  ]);

  const trendingArr = useMemo(() => {
    let newArr = [];
    trendingData?.forEach((e) => {
      newArr = newArr.concat(e.data);
    });

    return newArr;
  }, [trendingData]);

  const searchReducer = () =>{
    
  }

  const [searchState , searchDispatch] = useReducer(searchReducer,[
    { data: [], type: "song" , limit: '3'},
    { data: [], type: "album" , limit: '3'},
    { data: [], type: "artist" , limit: '3'},
  ])

  async function searchFetch(e) {
    // console.log("search fetch called");

    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/music/${e.type}?search={"title":"${inputValue}"}&limit=${e.limit}`,
        {
          headers: {
            projectID: PROJECT_ID,
          },
        }
      );

      const result = await response.json();
      setIsLoading(false);
      searchDispatch({
        type: e.type,
        payload: result.data
      })
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (inputValue.trim() !== "") {

      searchState.map((e)=>{
        setIsLoading(true);
        searchFetch(e);
      })
      
    }
  }, [inputValue]);

  async function trendingFetch(e) {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/music/${e.type}?limit=4`,
        {
          headers: {
            projectId: PROJECT_ID,
          },
        }
      );

      const result = await response.json();
      dispatchTrendingData({
        type: e.type,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    trendingData.map((e) => {
      setIsLoading(true);
      trendingFetch(e);
    });
  }, []);

  useEffect(()=>{

    if(!firstRender){
      setFirstRender(true)
      return
    }

    if(searchRef.current && firstRender){
      window.addEventListener('click', (e)=>{
        if(searchRef.current && !searchRef?.current?.contains(e.target)){
          setSearchOpen(false)
        }
      })
    }

    return () =>{
      window.removeEventListener('click', ()=>{})
    }

},[searchRef.current])

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-section">
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

        <span className="search-clear" onClick={() => setInputValue("")}>
          Clear
        </span>
        <MdCancel className="close-icon" onClick={() => setSearchOpen(false)} />
      </div>
      {
        isLoading ?
        <div className="search-loader-container">
          <Loader size='25' border='3' margin='0' /> 
          <p>Loading results</p>
        </div>:
        <div className="search-list-section">
          {
            inputValue ?
            <div className="search-suggession-section">
            <SearchSuggession /> 
            </div> :
        
            <div className="trending-container">
              <h5>Trending</h5>
              <div className="song-item-section">
                {trendingArr?.map((e, idx) => (
                  <SongItem
                    key={idx}
                    data={e}
                    songPoster={songPoster}
                    songInfo={songInfo}
                    imgMarginR="11px"
                    width="350px"
                    playCur="pointer"
                    titleCur="pointer"
                  />
                ))}
              </div>
            </div>
          }
        </div>
      }
      
    </div>
  );
}

export default Search;
