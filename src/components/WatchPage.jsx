import React from 'react'
import { useSearchParams } from 'react-router-dom';
import WatchPageMovieCard from './WatchPageMovieCard';

const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:ml-20 mt-4 flex justify-center'>
                <iframe 
                    className='w-full md:w-[900px] h-[300px] md:h-[600px]' 
                    src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=_1rhEFF5cGRK-Veb"}
                    title="YouTube video player"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>

            {/* Movie Card Section */}
            <div className='m-4 mx-6 border-b-2 w-full'>
                <WatchPageMovieCard />
            </div>
        </div>
    );
}

export default WatchPage;
