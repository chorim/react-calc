import React from 'react'
import './App.css'

const Calc = () => {
  return (
    <table>
      <thead>
        <th colSpan={4}>0</th>
      </thead>
      <tbody>
      <tr>
        <td className="first-button">AC</td>
        <td className="first-button">+/-</td>
        <td className="first-button">%</td>
        <td>??</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>X</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>-</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>+</td>
      </tr>
      <tr>
        <td colSpan={2}>0</td>
        <td>.</td>
        <td>=</td>
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
