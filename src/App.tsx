import React, { useState } from 'react'
import './App.css'
import { Button } from './components/Button'


const Calc = () => {
  const [counter, setCounter] = useState<string>('')
  return (
    <Button onPress={ setCounter } counter={ counter }/>
  )
}


const App: React.FC = () => {
  return (
    <Calc/>
  )
}

export default App
