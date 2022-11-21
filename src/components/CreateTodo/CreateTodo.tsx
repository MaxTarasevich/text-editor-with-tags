import React, { useState } from 'react'

import { AiFillCheckCircle, AiFillSave } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

import './CreateTodo.scss'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

interface Props {
  addNewTodo: (todo: Data) => void
}

const CreateTodo: React.FC<Props> = ({ addNewTodo }) => {
  const [todo, setTodo] = useState<Data>({
    id: Date.now(),
    text: '',
    completed: false,
    tags: [],
  })

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addNewTodo(todo)
    setTodo({
      id: Date.now(),
      text: '',
      completed: false,
      tags: [],
    })
  }

  return (
    <form className="createTodo" onSubmit={(e) => handlerSubmit(e)}>
      {todo.completed ? (
        <AiFillCheckCircle
          className="icons"
          title="complete"
          onClick={() => setTodo({ ...todo, completed: !todo.completed })}
        />
      ) : (
        <BsCircle
          className="icons"
          title="not complete"
          onClick={() => setTodo({ ...todo, completed: !todo.completed })}
        />
      )}
      <input
        className="createTodo__input"
        type="text"
        placeholder="Write your todo here"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <button className="createTodo__btn">
        {''}
        <AiFillSave className="icons" title="save" />
      </button>
    </form>
  )
}

export default CreateTodo
