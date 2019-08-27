import React, { useState } from 'react'
import { evaluate } from 'mathjs'

type state = (updateValue: string) => void
interface MemoryParams {
  data: string
  state: state
}

export const Memory = (props: MemoryParams) => {

  const [memory, setMemory] = useState('0')

  const resetAction = () => {
    setMemory('0')
    alert('Clear')
  }

  const saveAction = () => {
    setMemory(props.data)
    alert(props.data + " saved")
  }

  const minusAction = () => props.state(evaluate(`${props.data} - ${memory}`))
  const plusAction = () => props.state(evaluate(`${props.data} + ${memory}`))

  return (
    <div>
      <button onClick={resetAction}>MR</button>
      <button onClick={saveAction}>Save</button>
      <button onClick={minusAction}>M-</button>
      <button onClick={plusAction}>M+</button>
      <h2>{memory}</h2>
    </div>
  )
}
