import React from 'react'
import ToDoButtonStyle from './ToDoButtonsStyle'


const ToDoButtons = ({children}) => {
  return (
    <ToDoButtonStyle>{children}</ToDoButtonStyle>
  )
}

export default ToDoButtons