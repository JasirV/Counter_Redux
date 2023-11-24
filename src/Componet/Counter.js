import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment } from '../Redux/Counter/CounterAction';
const Counter = () => {
    const count=useSelector((state)=> state.count);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incriment())}>
            Incriment
        </button>
        <button onClick={()=>dispatch(decriment())}>Decriment</button>
    </div>
  )
}

export default Counter