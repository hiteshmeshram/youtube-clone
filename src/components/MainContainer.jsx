import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='mt-4 mx-5'>
        <ButtonList/>
        <div className='flex justify-center'>
          <VideoContainer/>
        </div>
    </div>
  )
}

export default MainContainer