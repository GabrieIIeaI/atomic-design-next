import { FlexLineProps } from './types'

import './styles.css'

const FlexLine = ({
  children,
  gap = 10
}: FlexLineProps) => 
  <div 
    className='container' 
    style={{
      gap: gap
    }}
  >
    {children}
  </div>

export default FlexLine