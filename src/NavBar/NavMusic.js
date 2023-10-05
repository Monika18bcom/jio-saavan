import React, { useEffect } from 'react'

function NavMusic() {


    useEffect(()=>{
        fetch()
        .then((response)=> response.json())
        .then((result)=> console.log(result))
    },[])
  return (
    <div>
        <h3>What's Hot on JioSaavn</h3>
        <div>
            <div>
                <h4>New Releases</h4>
                <ul></ul>
            </div>
            <div>
                <h4>Top Playlists</h4>
                <ul></ul>
            </div>
            <div>
                <h4>Top Artists</h4>
                <ul></ul>
            </div>
        </div>
    </div>
  )
}

export default NavMusic