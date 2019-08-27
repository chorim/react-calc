import React, { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

const Calc = () => {
  const [counter, setCounter] = useState('')
  return <Button onPress={setCounter} counter={counter}/>
}

const App = () => <Calc/>

export default App
