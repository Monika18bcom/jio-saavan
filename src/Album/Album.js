import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Album.css";
import AlbumPoster from "../AlbumPoster/AlbumPoster";
import Loader from "../Loader/Loader";
import SongItem from "../NavBar/SongItem";

function Album() {
  const { type, id } = useParams();

  const [dataArr, setDataArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/music/${type}/${id}`,
        {
          headers: {
            projectId: "nwi12vygvqne",
          },
        }
      );

      const result = await res.json();
      setIsLoading(false);
      setDataArr(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [type, id]);

  useEffect(()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
  },[])


  return isLoading ? (
    <div className="album-loader-container">
      <Loader size="60" border="6" />
    </div>
  ) : (
    <div className="album-container">
      <AlbumPoster data={dataArr} type={type} />

      <div className="album-list">
        {dataArr?.songs?.map((e, id) => (
          <SongItem
            key={id}
            data={e}
            num={id}
            artistArr={dataArr}
            songNum={true}
            songInfo={true}
            likeIcon={true}
            durDots={true}
            songList={true}
            songInfoFD="row"
            songInfoAI="center"
            songInfoJC="flex-start"
            songInfoMarginR="22px"
            songlistWidth="50%"
            bg="#fff"
            borderR="4px"
            border="1px solid #e9e9e9"
            imgMarginR="22px"
            likeIconMarginR="22px"
            numMarginR='22px'
            width="100%"
            playCur="pointer"
            titleCur="pointer"
            typeCur="pointer"
          />
        )) ||
          (dataArr && 
            <SongItem 
              data={dataArr}
              songNum={true}
              songInfo={true}
              likeIcon={true}
              durDots={true}
              songList={true}
              songInfoFD="row"
              songInfoAI="center"
              songInfoJC="flex-start"
              songInfoMarginR="22px"
              songlistWidth="50%"
              bg="#fff"
              borderR="4px"
              border="1px solid #e9e9e9"
              imgMarginR="22px"
              likeIconMarginR="22px"
              numMarginR='22px'
              width="100%"
              playCur="pointer"
              titleCur="pointer"
              typeCur="pointer"
            />
          )}
      </div>
    </div>
  );
}

export default Album;
