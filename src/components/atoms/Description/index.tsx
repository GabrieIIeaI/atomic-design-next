import { DescriptionProps } from './types'

const Description = ({ description, ...props }: DescriptionProps) => 
  <p {...props}>{description}</p>

export default Description