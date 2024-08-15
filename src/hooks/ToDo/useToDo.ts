import { useState } from 'react'

import { useRedux } from '../reducer'
import { ReducerNames } from '@/reducer/enums'
import { addToDoService } from '@/services/toDoService'

export const useToDo = () => {
  const [toDoList, dispatch] = useRedux(ReducerNames.ToDos)

  const [toDo, setToDo] = useState('')

  const onChangeToDo = (value: string) => 
    setToDo(value)

  const onResetToDo = () => 
    setToDo('')

  const addToDo = () => 
    addToDoService({ description: 'd', id: '', description: toDo}, dispatch, onResetToDo)

  return {
    toDo,
    toDoList,
    onChangeToDo,
    onResetToDo,
    addToDo,
  }
}
