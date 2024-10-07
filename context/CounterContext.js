import { createContext , useReducer} from 'react'

const CounterContext = createContext({
  data: {
    count: 1,
    disabled: false
  },
  handleCountUp: () => { },
  handleCountDown: () => { },
  handleToggleDisable: () => { },
})

const reducerFn = (state, action) => {

  switch (action.type) {
    case 'COUNT_UP':
      return {
        ...state,
        count: state.count + action.payload
      };

    case 'COUNT_DOWN':
      return {
        ...state,
        count: state.count - action.payload
      };

    case 'TOGGOLE_DISABLE':
      return {
        ...state,
        disabled: !state.disabled
      };

    default:
      return state
  }
}
export const CounterState =(props)=>{
  const [data, dispatch] = useReducer(reducerFn, {
    count: 1,
    disabled: false
  })
  const { count, disabled } = data

  const handleCountUp = (val) => {
    dispatch({
      type: 'COUNT_UP',
      payload: val
    })
  }
  const handleCountDown = (val) => {
    dispatch({
      type: 'COUNT_DOWN',
      payload: val
    })
  }
  const handleToggleDisable = () => {
    dispatch({
      type: 'TOGGOLE_DISABLE',
    })
  }
  return(

     <CounterContext.Provider value={{
      data,
      handleCountUp,
      handleCountDown,
      handleToggleDisable,
    }} >
    {props.children}
    </CounterContext.Provider>
  )

}

export default CounterContext