import { useState } from 'react'
import './App.css'
import ReactPlayer from 'react-player'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <ReactPlayer url='https://mm-chat-history-bucket.s3.amazonaws.com/Addition_and_subtraction_problems.mp4' />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <video preload="auto" src="https://mm-chat-history-bucket.s3.amazonaws.com/Addition_and_subtraction_problems.mp4" style="width: 100%; height: 100%;"></video>
    </>
  )
}

export default App
