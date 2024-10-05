import React, { useEffect, useState } from 'react'
import { MENU_URL,YOUTUBE_ICON_URL,USER_ICON_URL, YOUTUBE_SUGGESTION_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addToggleState } from '../utils/toggleSlice'
import { Link } from 'react-router-dom'


const Head = () => {
    const dispatch=useDispatch()
    const [searchText,setSearchText]=useState("");
    const [showSuggestions,setShowSuggestions]=useState(false)
    const [searchSuggestions,setSearchSuggestions]=useState([])

    // console.log(searchText)

    const handleMenu=()=>{
        dispatch(addToggleState())

    }
    const getSuggestions=async()=>{
        const data=await fetch(YOUTUBE_SUGGESTION_API+searchText)
        const json=await data.json()
        // console.log(json[1])
        setSearchSuggestions(json[1])
    }

    useEffect(()=>{
        const timer=setTimeout(()=>{
            getSuggestions()
        },200)

        return ()=>{
            clearTimeout(timer)
        }
        
    },[searchText])
  return (
    <div className='grid  grid-flow-col p-2 shadow-sm mx-4'>
        <div className='flex col-span-1 items-center'>
            <img className="w-8 h-8
            cursor-pointer" alt="menu" src={MENU_URL} onClick={handleMenu}/>
           <Link to="/"> <img className="w-1/4 ml-3" alt="yt logo" src={YOUTUBE_ICON_URL}/>   </Link>
        </div>
        <div className='col-span-10'>
            <div className=' flex  '>
                <input type="text" className='hidden md:block border border-gray-400 w-1/2 rounded-l-full p-2' value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}>
                 </input>
                <button className='hidden md:block border border-gray-400 rounded-r-full p-2 bg-gray-100'>search</button>
            </div>
            {showSuggestions && <div className='rounded-lg mt-2 fixed shadow-md  bg-gray-50'>
                <ul>
                    {searchSuggestions.map(search=><li className='w-[27rem] px-2 py-2'>{search}</li>)}
                    
                    
                    
                    
                </ul>
            </div>}
        </div>
        <div className='col-span-1'>
            <img className="w-8" alt="user" src={USER_ICON_URL}></img>
        </div>
        
    </div>
  )
}

export default Head