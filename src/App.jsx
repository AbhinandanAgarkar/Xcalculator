import { useState } from 'react'
import './App.css'
import Keypad from './assets/Keypad/Keypad'

function App() {

  return (
    <>
    <div className='calculator'>
    <h1>React Calculator</h1>
    <input type='number' />
    <div className='result'>result</div>
    <Keypad />
    </div>
    </>
  )
}

export default App
