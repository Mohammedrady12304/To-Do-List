import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'
export const ToggleBtn = () => {
    const {data , handleToggleDisable}=useContext(CounterContext)
  return (
    <div> <button className="btn small" onClick={handleToggleDisable} >
    {data.disabled ? 'Resume' : 'Stop'}
      </button></div>
  )
}
// import React from 'react'
// import { useContext } from 'react'
// import CounterContext from '../context/CounterContext'
// export const DisableBtn = () => {
//     const {data, handleToggleDisable} = useContext(CounterContext)
//   return (
    
//     <button className="btn small" onClick={handleToggleDisable} >
//     {data.disabled ? 'Resume' : 'Stop'}
//   </button>
//   )
// }
