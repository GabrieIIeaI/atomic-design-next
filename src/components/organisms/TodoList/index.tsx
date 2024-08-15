import { ListComponentProps } from './types'
import { FlatList, FlexColumn, Title } from '@/components/atoms'

const ListComponent = <TData,>({ title, ...flatListProps }: ListComponentProps<TData>) => 
  <FlexColumn>
    <Title title={title}/>
    <FlatList {...flatListProps}/>
  </FlexColumn>

export default ListComponent