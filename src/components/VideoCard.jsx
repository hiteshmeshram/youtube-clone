const VideoCard=({info})=>{

    if(!info) return null;
    console.log(info)
    const{snippet,statistics}=info;
    
    const{channelTitle,title,thumbnails}=snippet;
    // console.log(info)
    

    return(
        <div className="m-3 pb--2 shadow-lg w-96 rounded-md">
               <div>
                    <img className="w-full" src={thumbnails.medium.url}></img>
                </div>
                <div className="flex mt-2"> 
                    <div className="mx-2  w-24 ">
                        <img className="rounded-full w-8 h-8" src={thumbnails.medium.url }></img>
                    </div>
                    <div>
                        <div className="font-bold  w-full max-h-12 overflow-hidden  ">
                            {title}
                        </div>
                        <div className="mt-1">
                            {channelTitle}
                        </div>
                        <div className="text-gray-600  mb-2">
                            {statistics.viewCount/1000} k views
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default VideoCard;