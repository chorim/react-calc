import React from 'react'
import { evaluate } from 'mathjs'

export const Button = (props: any) => {

  const { onPress, counter } = props

  const addToCounter = (value: string) => {
    // dot point
    if ( value === '.' && (counter.length === 0
      || counter.slice(-1) === '.')) return

    if (counter === 'ERROR') onPress('')
    else onPress(counter + value)
  }

  const operator = (value: string) => {
    switch (value) {
      case 'AC': onPress(''); break
      case '=':
        try {
          onPress( evaluate(counter) )
        } catch (e) {
         console.error("Eval Error", e)
         onPress('ERROR')
        }
        break
      case '+/-':
        console.log(counter)
        const prefix = String(counter).charAt(0)
        if (prefix === "" || prefix !== "-") onPress('-' + counter)
        else onPress(String(counter).slice(1))
        break
    }

  }
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
            <td className="first-td" onClick={ () => {operator('AC')}}>AC</td>
            <td onClick={ () => {operator('+/-')} } className="first-td">+/-</td>
            <td onClick={ () => {addToCounter('%')} } className="first-td">%</td>
            <td onClick={ () => {addToCounter('/')} }>÷</td>
          </tr>
          <tr>
            <td onClick={ () => {addToCounter('7')} }>7</td>
            <td onClick={ () => {addToCounter('8')} }>8</td>
            <td onClick={ () => {addToCounter('9')} }>9</td>
            <td onClick={ () => {addToCounter('*')} }>X</td>
          </tr>
          <tr>
            <td onClick={ () => {addToCounter('4')} }>4</td>
            <td onClick={ () => {addToCounter('5')} }>5</td>
            <td onClick={ () => {addToCounter('6')} }>6</td>
            <td onClick={ () => {addToCounter('-')} }>-</td>
          </tr>
          <tr>
            <td onClick={ () => {addToCounter('1')} }>1</td>
            <td onClick={ () => {addToCounter('2')} }>2</td>
            <td onClick={ () => {addToCounter('3')} }>3</td>
            <td onClick={ () => {addToCounter('+')} }>+</td>
          </tr>
          <tr>
            <td onClick={ () => {addToCounter('0')} } colSpan={2}>0</td>
            <td onClick={ () => {addToCounter('.')} }>.</td>
            <td onClick={ () => {operator('=')} }>=</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
