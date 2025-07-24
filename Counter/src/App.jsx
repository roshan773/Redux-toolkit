import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Counterslice'

function App() {

  const {count} = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default App
