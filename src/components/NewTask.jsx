import React, { useState } from 'react'

export const NewTask = ({ onAdd }) => {

  const [task, setTask] = useState('')

  function handleChange(event) {

    setTask(event.target.value)
  }

  function handleClick() {
    setTask('')
    onAdd(task)
  }

  return (
    <div className="flex items-center gap-4">
      <input type="text" onChange={handleChange} value={task} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  )
}
