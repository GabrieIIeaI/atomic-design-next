import { InputTextProps } from '@/components/atoms/InputText/types'
import { ListComponentProps } from '@/components/organisms/TodoList/types'

export interface TodoTemplateProps <TData> {
  inputTask: InputTextProps
  listComponentProps: ListComponentProps<TData>
  onPressAdd: () => void
}