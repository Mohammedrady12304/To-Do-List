import React from 'react'

import CounterContext from '../context/CounterContext'

const CounterButton = ({ count }) => {
  return (
    <CounterContext.Consumer>
{(ctx)=>(
    <button className="btn btn-secondary" disabled={ctx.data.disabled} onClick={()=>ctx.handleCountDown(count || 1)}  >
    -{count}
  </button>

  )}
    </CounterContext.Consumer>
  )
}

export default CounterButton