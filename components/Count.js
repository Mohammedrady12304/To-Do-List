import React from 'react'

import CounterContext from '../context/CounterContext'
import { useContext } from 'react'
import useCounter from '../hooks/useCounter'

const Count = () => {
  const {data} = useContext(CounterContext)
  const counter = useCounter()
  return (
    
   <div className="counter"> {counter} </div>
  
    )
  }
  
export default Count