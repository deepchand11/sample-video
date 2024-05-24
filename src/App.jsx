import { useState } from 'react'
import './App.css'
import ReactPlayer from 'react-player'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <video width={800} height={500} controls loop autoPlay muted>
        <source src='https://d3ez5y0cidphb1.cloudfront.net/Addition_and_subtraction_problems.mp4'
        type='video/mp4'/>
      </video>
      <ReactPlayer url='https://d3ez5y0cidphb1.cloudfront.net/Addition_and_subtraction_problems.mp4'

      controls = {true}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
