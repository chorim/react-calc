import React from 'react'


export const Button = (props: any) => {

  const { onPress, counter } = props
  console.log(onPress)
  console.log("LOADED")
  return (
    <div>
      <table> 
        <thead>
          <tr>
            <th colSpan={4}> {counter} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-td">AC</td>
            <td className="first-td">+/-</td>
            <td className="first-td">%</td>
            <td>÷</td>
          </tr>
          <tr>
            <NumberButton countValue={3} onPress={() => {}}/>
            <td onClick={ () => {console.log("CLICKED")} }>8</td>
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
    </div>
  )
}


const NumberButton = (props: any) => {
  const { countValue, onPress } = props

  return (
    <td onClick={ () => { onPress(countValue) }}>{countValue}</td>
  )
}