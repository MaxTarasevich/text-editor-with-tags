import React, { useState } from 'react'

import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import CreateTodo from '../CreateTodo/CreateTodo'

import './Todo.scss'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

interface Props {
  id: number
  text: string
  completed: boolean
  tags: string[]
  completeTodo: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, todo: Data) => void
}

const Todo: React.FC<Props> = ({
  id,
  text,
  completed,
  tags,
  completeTodo,
  deleteTodo,
  editTodo,
}) => {
  const [edit, setEdit] = useState(false)

  return edit ? (
    <div>
      <CreateTodo
        editTodo={editTodo}
        edit={edit}
        setEdit={setEdit}
        id={id}
        text={text}
      />
    </div>
  ) : (
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
      <AiFillEdit
        className="icons"
        title="edit"
        onClick={() => setEdit(!edit)}
      />
      <AiFillDelete
        className="icons icons-delete"
        title="delete"
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

export default Todo
