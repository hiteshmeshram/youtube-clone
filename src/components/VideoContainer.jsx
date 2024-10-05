import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([])

    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_URL);
        const json=await data.json();
        // console.log(json.items)
        setVideos(json.items)
    }
  return (
    <div className='flex  flex-wrap'>
      {videos.map((video)=>{
        return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}/></Link>
      })}
        
    </div>
  )
}

export default VideoContainer