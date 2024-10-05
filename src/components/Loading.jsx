import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loading = () => {
    const [progress, setProgress] = useState(50)
  return (
    <div>
        <LoadingBar
        color='#red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}

export default Loading