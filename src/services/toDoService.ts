import { Dispatch } from 'redux'

import { createToDo } from '@/reducer/ToDo'
import { CreateToDoItemReducerStateProps } from '@/reducer/ToDo/types'

export const addToDoService = (data: CreateToDoItemReducerStateProps, dispatch: Dispatch, callback: () => void) => {
  if(!data.description || !data.description) return window.alert('Precisa ser escrito um título para a task')

  dispatch(createToDo(data))
  callback()
}