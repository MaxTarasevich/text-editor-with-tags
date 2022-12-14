import React, { useEffect, useRef, useState } from 'react'

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
  addNewTodo?: (todo: Data) => void
  editTodo?: (id: number, todo: Data) => void
  edit?: boolean
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>
  id?: number
  text?: string
}

const CreateTodo: React.FC<Props> = ({
  addNewTodo,
  editTodo,
  edit,
  setEdit,
  id,
  text,
}) => {
  const [todo, setTodo] = useState<Data>({
    id: Date.now(),
    text: text ? text : '',
    completed: false,
    tags: [],
  })

  const focusRef = useRef<HTMLInputElement>(null)

  function addTags(todo: Data, e: React.ChangeEvent<HTMLInputElement>) {
    const tagsArr = todo.text
      .split(' ')
      .filter((el) => el.length >= 1 && el[0] === '#')

    setTodo({ ...todo, tags: tagsArr, text: e.target.value })
  }

  useEffect(() => {
    focusRef.current?.focus()
  }, [])

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (edit && !!editTodo && id && !!setEdit) {
      editTodo(id, todo)
      setEdit(!edit)
    }
    if (!!addNewTodo) {
      addNewTodo(todo)
    }

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
        ref={focusRef}
        className="createTodo__input"
        type="text"
        placeholder="Write your todo here"
        value={todo.text}
        onChange={(e) => addTags(todo, e)}
      />
      <button className="createTodo__btn">
        {''}
        <AiFillSave className="icons" title="save" />
      </button>
    </form>
  )
}

export default CreateTodo
