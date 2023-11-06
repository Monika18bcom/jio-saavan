import { useContext, useEffect, useReducer, useState } from "react";
import './Home.css'
import Footer from '../Footer/Footer'
import Main from "../Main/Main";
import Album from "../Album/Album";
import { Route, Routes } from 'react-router-dom';
import NewReleases from "../Browse/NewReleases";
import TopCharts from "../Browse/TopCharts";
import MyMusic from "../My-Library/MyMusic";
import Me from "../NavBar/Me";
import { JiosaavnContext } from "../App/App";
import SearchComp from "../NavBar/SearchComp";
import Search from "../NavBar/Search";
import ComingSoon from "../My-Library/ComingSoon";
import History from "../My-Library/History";

function Home() {

    const { setIsLoading } = useContext(JiosaavnContext)


    const homeAlbumContainer = [
        {title: 'Trending Now', data:[] , type: 'song' , limit: '40' , action: 'trendingNow'},
        {title: 'New Releases', data:[] , type: 'song' , limit: '40' , sort : 'sort' , action: 'newReleases'},
        {title: 'Recommended artist Stations', data:[] , type: 'artist', limit: '20' , action: 'artistStation'}, 
        {title: 'Top Albums - Hindi', data:[] , type: 'album', limit: '20', action: 'topAlbums'}, 
        {title: 'Top Genres & Moods', data:[] , type: 'song', limit: '40' , mood: 'romantic' , action: 'topGenres'},
        {title: 'Pick Your Mood', data:[] , type: 'song', limit: '40' , mood: 'happy' , action: 'pickYourMood'},    
    ]

    const homeAlbumReducer = (state , action) => {
        switch(action.type){
            case action.type:
                return state.map((e) => {
                    if(e.action === action.type){
                        setTimeout(()=>{
                            setIsLoading(false)
                        },500)
                        return {...e , data : action.payload}
                    }
                    else return {...e}
                })
            
            default : return state
            
        }
        
    }

    const [homeState , homeDispatch] = useReducer(homeAlbumReducer , homeAlbumContainer)



    async function fetchMusicData(e){
        try{
            if(e.sort){
                const response =await  fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}&sort={"release":1}`, {
                headers:{
                    'projectId': 'nwi12vygvqne'
                }})

                const result = await response.json()
                homeDispatch({
                    type: e.action ,
                    payload : result.data
                })
            }
            else if(e.mood){
                const response =await  fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}&filter={"mood":"${e.mood}"}`, {
                headers:{
                    'projectId': 'nwi12vygvqne'
                }})

                const result = await response.json()
                homeDispatch({
                    type: e.action ,
                    payload : result.data
                })
            } 
            else{
                const response =await  fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}`, {
                headers:{
                    'projectId': 'nwi12vygvqne'
                }})

                const result = await response.json()
                homeDispatch({
                    type: e.action ,
                    payload : result.data
                })

            }

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        homeAlbumContainer.map((album)=>{
            setIsLoading(true)
            fetchMusicData(album)
        })
    },[])

    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])


    return(

        <div className="home-section">
            <Routes>
                <Route path='/' element={<Main mainAlbumArr={homeState} />}/>
                <Route path='/:type/:name/:id' element={<Album />}/>
                {/* <Route path='/search' element={<Search />} /> */}
                <Route path='/search/:type/:input' element={<SearchComp /> } />
                <Route path='/new-releases' element={<NewReleases type='album' />} />
                <Route path='/top-charts' element={<TopCharts type="charts" />} />
                <Route path='/top-playlists' element={<NewReleases type='song' />} />
                <Route path='/original-podcasts' element={<TopCharts type="podcasts" />} />
                <Route path='/top-artists' element={<NewReleases type='artist' />} />
                <Route path='/radio' element={<TopCharts type="radio" />} />
                <Route path='/my-music' element={<MyMusic />} >
                    <Route index element={<ComingSoon />} />
                    <Route path="playlists" element={<ComingSoon />} />
                    <Route path="songs" element={<ComingSoon />} />
                    <Route path="albums" element={<ComingSoon />} />
                    <Route path="podcasts" element={<ComingSoon />} />
                    <Route path="artists" element={<ComingSoon />} />
                </Route>
                <Route path="/listening-history" element={<History />}/>
                <Route path='/me' element={<Me />} /> 
            </Routes>
            <Footer />
        </div>
    )
}

export default Home