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
  const tags = todos?.map((el) => el.tags).flat()

  console.log(new Set(tags))

  return <div>Tags</div>
}

export default Tags
