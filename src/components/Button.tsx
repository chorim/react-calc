import React from 'react'

export const Button = (props: any) => {
  return (
    <td colSpan={props.colSpan}>
      {props.children}
    </td>
  )
}
