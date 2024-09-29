import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment } from './redux/counterslice'
import UserList from './UserList'


function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value)

  return (
    <>
      <UserList />

      {/* <div>{value}</div>
      <div><button onClick={() => dispatch(increment())}>Arttır</button></div>
      <div><button onClick={() => dispatch(decrement())}>Azalt</button></div> */}
    </>
  )
}

export default App
