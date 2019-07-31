import React, { useState, useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'

const useOperator = () => {

}

const useNumber = () => {

  const [number, setNumber] = useState(0)

  const plusNumber = (value: number) => setNumber(number + value)
  const minusNumber = (input: number) => setNumber(number - input)

  useEffect(() => {
    document.title = String(number)
  })
  return [plusNumber, minusNumber]
}

const Calc = () => {
  const [plusNumber, minusNumber] = useNumber()
  return (
    <table>
      <thead>
        <th colSpan={4}>0</th>
      </thead>
      <tbody>
      <tr>
        <Button className="first-button">AC</Button>
        <Button className="first-button">+/-</Button>
        <Button className="first-button">%</Button>
        <Button>÷</Button>
      </tr>
      <tr>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>X</Button>
      </tr>
      <tr>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button handlerClick={() => minusNumber(23)}>-</Button>
      </tr>
      <tr>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </tr>
      <tr>
        <Button colSpan={2}>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </tr>
      </tbody>
    </table>
  )
}


const App: React.FC = () => {
  return (
    <Calc/>
  )
}

export default App
