import React from 'react'

import './TodoList.scss'

interface Props {
  children?: any
}

const TodoList: React.FC<Props> = ({ children }) => {
  return <div className="list">{children}</div>
}

export default TodoList
