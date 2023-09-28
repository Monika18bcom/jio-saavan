import { useEffect, useState } from "react";
import './Home.css'
import Footer from '../Footer/Footer'
import Loader from "../Loader/Loader";
import Main from "../Main/Main";
import Album from "../Album/Album";
import { Route, Routes } from 'react-router-dom';
import Browse from "../Browse/Browse";

function Home() {

    const [homeAlbumArr, setHomeAlbumArr] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const homeAlbumContainer = [
        {title: 'Trending Now', data:[] , type: 'song' , limit: '40'},
        {title: 'New Releases', data:[] , type: 'song' , limit: '40'},
        {title: 'Top Genres & Moods', data:[] , type: 'song', limit: '40'},
        {title: 'Pick Your Mood', data:[] , type: 'song', limit: '40'},
        {title: 'Top Albumns - Hindi', data:[] , type: 'album', limit: '20'}, 
        {title: 'Recommended artist Stations', data:[] , type: 'artist', limit: '20'},  
    ]


    async function fetchMusicData(e){
        try{
            const response =await  fetch(`https://academics.newtonschool.co/api/v1/music/${e.type}?limit=${e.limit}`, {
            headers:{
                'projectId': 'nwi12vygvqne'
            }})

            const result = await response.json()
            setIsLoading(false)
            setHomeAlbumArr((prev)=>[...prev, {...e, data: result.data}])   
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

    return(

        isLoading ? 
        <div className="loader-container">
            <Loader />
        </div> :
        <div className="home-section">             
            <Routes>
                <Route path='/' element={<Main mainAlbumArr={homeAlbumArr}/>}/>
                <Route path='/:type/:name/:id' element={<Album />}/>
                <Route path='/new-releases' element={<Browse />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home