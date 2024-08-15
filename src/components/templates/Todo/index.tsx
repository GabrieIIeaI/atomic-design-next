import styles from './styles.module.css'
import { TodoTemplateProps } from './types'
import { FlexColumn,  Title } from '@/components/atoms'
import { InputTodoList } from '@/components/molecules'
import ListComponent from '@/components/organisms/TodoList'

const   TodoTemplate = <TData,>({ inputTask, listComponentProps, onPressAdd }: TodoTemplateProps<TData>) => {
  return (
    <FlexColumn className={styles.container}>
      <InputTodoList 
        {...inputTask} 
        onPressSave={onPressAdd}
      />

      <ListComponent 
        {...listComponentProps}
      />
    </FlexColumn>
  )
}

export default TodoTemplate