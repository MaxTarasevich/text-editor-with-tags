import React from 'react'

import './Todo.scss'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

const Todo: React.FC<Data> = ({ id, text, completed, tags }) => {
  return <div>{text}</div>
}

export default Todo
