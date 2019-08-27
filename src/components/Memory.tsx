import React, { useState } from 'react'
import { evaluate } from 'mathjs'

interface MemoryParams {
  data: string
  state: any
}

export const Memory = (props: MemoryParams) => {

  const [memory, setMemory] = useState<string>('')

  const resetAction = () => {
    setMemory('')
    alert('Clear')
  }

  const saveAction = () => {
    setMemory(props.data)
    alert(props.data + " saved")
  }

  const minusAction = () => {
    if (memory.length === 0) {
      alert("Memory error")
      return
    }
    props.state( evaluate(`${props.data} - ${memory}`) )
  }
  const plusAction = () => {
    if (memory.length === 0) {
      alert("Memory error")
      return
    }
    props.state( evaluate(`${props.data} + ${memory}`) )
  }

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
