import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../utils/constants'

const WatchPageMovieCard = () => {
    const[videos,setVideos]=useState([])
    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_URL);
        const json=await data.json();
        console.log(json.items)
        setVideos(json.items)
        
    }
    if(!videos) return null;

    // const{contentDetails,snippet,statistics}=videos;
    // const{thumbnails}=snippet

    
  return (
    <div>
        {videos.map((video)=>{
          return  <div className='mx-2 my-4cd rounded-md flex'>
            <img  className=" w-[40%] rounded-md" src={video?.snippet?.thumbnails?.medium?.url} alt="movie"></img>
            <div className='ml-3'>
                <h3 className='font-bold'>{video?.snippet?.title}</h3>
                <h4>{video?.snippet?.channelTitle}</h4>
                <h4>{video?.statistics?.viewCount/1000}k views</h4>
            </div>
        </div>
        })}
    
    </div>
  )
}

export default WatchPageMovieCard