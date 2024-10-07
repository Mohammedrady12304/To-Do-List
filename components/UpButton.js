import React, { useContext } from 'react'


import CounterContext from '../context/CounterContext'

const CounterButton = ({ count }) => {
const {data , handleCountUp}= useContext(CounterContext) 

  return (
    

    <button className="btn" disabled={data.disabled} onClick={()=>handleCountUp(count || 1)}>
    +{count}
  </button>

  )
}

export default CounterButton