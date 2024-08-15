import styles from './styles.module.css'
import { CardProps } from './types'
import { Description, FlexColumn } from '@/components/atoms'

const Card = ({ description }: CardProps) => {
  return (
    <FlexColumn className={styles.container} gap={0}>
      <Description description={description} />
    </FlexColumn>
  )
}

export default Card