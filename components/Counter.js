import React from 'react'

import UpButton from './UpButton'
import DownButton from './DownButton'
import Count from './Count'

const Counter = () => {
  return (
    <div className="app-counter" >
      <UpButton count={3} />
      <UpButton />
      <Count />
      <DownButton />
      <DownButton count={3} />
    </div>
  )
}

export default Counter