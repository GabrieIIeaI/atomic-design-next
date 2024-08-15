export interface DescriptionProps extends Omit<React.HtmlHTMLAttributes<HTMLParagraphElement>, 'children'> {
  description: string
}