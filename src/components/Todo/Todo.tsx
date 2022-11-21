import React from 'react'

import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

import './Todo.scss'

interface Props {
  id: number
  text: string
  completed: boolean
  tags: string[]
  completeTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

const Todo: React.FC<Props> = ({
  id,
  text,
  completed,
  tags,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <div className="todo">
      {completed ? (
        <AiFillCheckCircle
          className="icons"
          title="complete"
          onClick={() => completeTodo(id)}
        />
      ) : (
        <BsCircle
          className="icons"
          title="not complete"
          onClick={() => completeTodo(id)}
        />
      )}

      <span className="todo__text"> {text}</span>
      <AiFillEdit className="icons" title="edit" />
      <AiFillDelete
        className="icons"
        title="delete"
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

export default Todo
