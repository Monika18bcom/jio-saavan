import { useEffect, useState } from "react";
import './Main.css'
import Footer from '../Footer/Footer'
import MusicData from '../MusicData/MusicData'
import Loader from "../Loader/Loader";

function Main() {

    const [mainAlbumArr, setMainAlbumArr] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    const mainAlbumContainer = [
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
            setMainAlbumArr((prev)=>[...prev, {...e, data: result.data}])   
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        mainAlbumContainer.map((album)=>{
            setIsLoading(true)
            fetchMusicData(album)
        })
    },[])

    return(

        isLoading ? 
        <div className="loader-container">
            <Loader />
        </div> :
        <div className="main-section"> 
            <main className='main-album-content'>
                {
                mainAlbumArr.map((album, idx)=>(
                    <div className="main-album-section" key={idx}>
                        <h2 className='main-album-heading'>{album.title}</h2>
                        {album && <MusicData album={album} />}
                    </div>
                ))
                }
            </main>
            <footer id='main-footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Main