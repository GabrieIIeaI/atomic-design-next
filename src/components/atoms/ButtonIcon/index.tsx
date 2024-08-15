import { IoMdAdd } from 'react-icons/io'

import styles from './styles.module.css'
import { ButtonIconProps } from './types'

const ButtonIcon = ({ icon, onPress }: ButtonIconProps) => 
  <button className={styles.button} onClick={onPress}>
    {icon}
  </button>
  
export default ButtonIcon