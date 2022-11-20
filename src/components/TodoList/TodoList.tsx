import React from 'react'
import Todo from '../Todo/Todo'

import './TodoList.scss'


interface Data{
    id: number
    text: string
    completed: boolean
    tags: string[]
  }

interface Props{
    data?:Data[]
}



const TodoList: React.FC<Props> = ({data}) => {
  return (
    <div>
     {
        data ? (data.map((todo)=>(
            <Todo {...todo}/>
        ))) : 'Loading'
     }
    </div>
  )
}

export default TodoList
