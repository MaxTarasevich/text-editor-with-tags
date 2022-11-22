import React from 'react'

import './Tags.scss'

interface Data {
  id: number
  text: string
  completed: boolean
  tags: string[]
}

interface Props {
  todos?: Data[]
}

const Tags: React.FC<Props> = ({ todos }) => {
  const tags = new Set(todos?.map((el) => el.tags).flat())

  return (
    <>
      {todos?.length !== 0 ? (
        <div className="tags">
          <span className="tags__item">All</span>
          {Array.from(tags).map((el) => (
            <span key={el} className="tags__item">
              {el}
            </span>
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Tags
