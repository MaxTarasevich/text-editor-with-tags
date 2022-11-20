import React, { useEffect, useState } from 'react'

import './App.scss'

import CreateTodo from './components/CreateTodo/CreateTodo'
import TodoList from './components/TodoList/TodoList'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

function App() {
  const [data, setData] = useState<Data[] | undefined>()

  useEffect(() => {
    fetch('./data/data.json')
      .then((data) => data.json())
      .then((data) => { 
        console.log(data)
        setData(data)})

    console.log(data)
  }, [data])
  return (
    <div className="App">
      <CreateTodo />
      <TodoList data={data} />
    </div>
  )
}

export default App
