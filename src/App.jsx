import { useState } from 'react'
import './App.css'
import ReactPlayer from 'react-player'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
