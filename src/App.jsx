import { useState } from 'react'
import Uploader from './components/Uploader';
import './App.css'

function App() {
  return (
    <>
      <h1 className="inter-header">swida</h1>
      <h2 className="inter-header">an ai lung cancer assistant</h2>
      <Uploader />
      <div id="center-button">
        <button id="results">See Results</button>
      </div>  
    </>
  )
}

export default App