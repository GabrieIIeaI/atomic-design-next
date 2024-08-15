'use client'

import Card from '@/components/molecules/Card'
import { TodoTemplate } from '@/components/templates'
import { useToDo } from '@/hooks/ToDo'

export default function Home() {
  const {
    toDo,
    toDoList,
    onChangeToDo,
    addToDo
  } = useToDo()

  return (
    <main>
      <TodoTemplate 
        onPressAdd={addToDo}
        inputTask={{
          value: toDo,
          onChanceText: onChangeToDo
        }}
        listComponentProps={{
          data: toDoList,
          renderItem: item => <Card description={item.description} />,
          keyExtractor: i => i.id,
        }}
      />
    </main>
  )
}
