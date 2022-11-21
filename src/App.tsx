import React, { useEffect, useState } from 'react'

import './App.scss'

import CreateTodo from './components/CreateTodo/CreateTodo'
import Todo from './components/Todo/Todo'
import TodoList from './components/TodoList/TodoList'

import dataJson from './data/data.json'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

function App() {
  const [todos, setTodos] = useState<Data[] | undefined>()

  function addNewTodo(todo: Data) {
    if (todos) {
      setTodos([todo, ...todos])
    } else {
      setTodos([todo])
    }
  }

  function completeTodo(id: number) {
    const newTodos = todos?.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed
      }
      return el
    })
    setTodos(newTodos)
  }

  function deleteTodo(id: number) {
    const newTodos = todos?.filter((el) => el.id !== id)
    setTodos(newTodos)
  }

  useEffect(() => {
    setTimeout(() => {
      setTodos(dataJson)
    }, 800)
  }, [])

  return (
    <div className="App">
      <CreateTodo addNewTodo={addNewTodo} />
      <TodoList>
        {todos ? (
          todos.length > 0 ? (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (
            <p>No todos</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </TodoList>
    </div>
  )
}

export default App
