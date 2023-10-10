import { useEffect, useReducer, useState } from "react";
import './Home.css'
import Footer from '../Footer/Footer'
import Loader from "../Loader/Loader";
import Main from "../Main/Main";
import Album from "../Album/Album";
import { Route, Routes } from 'react-router-dom';
import NewReleases from "../Browse/NewReleases";
import TopCharts from "../Browse/TopCharts";

function Home() {

    const [isLoading , setIsLoading] = useState(false)

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

    // console.log(homeState , homeAlbumArr)

    return(

        isLoading ? 
        <div className="home-loader-container">
            <Loader />
        </div> :
        <div className="home-section">             
            <Routes>
                <Route path='/' element={<Main mainAlbumArr={homeState} />}/>
                <Route path='/:type/:name/:id' element={<Album />}/>
                <Route path='/new-releases' element={<NewReleases type='album' />} />
                <Route path='/top-charts' element={<TopCharts type="charts" />} />
                <Route path='/top-playlists' element={<NewReleases type='song' />} />
                <Route path='/original-podcasts' element={<TopCharts type="podcasts" />} />
                <Route path='/top-artists' element={<NewReleases type='artist' />} />
                <Route path='/radio' element={<TopCharts type="radio" />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home