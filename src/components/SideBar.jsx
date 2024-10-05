import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const toggleState=useSelector(store=>store.toggle.toggleState)

    if(!toggleState) return null;
  return (
    <div className='w-80 shadow-lg ml-4 p-6 '>
        <ul className=''>
          <li className='font-bold pb-4'>Home</li>
          <li className='font-bold'>Shorts</li>
          <li className='font-bold'>Videos</li>
          <li className='font-bold'>Live</li>
        </ul>
        <h1 className='font-bold pt-4'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-4'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default SideBar