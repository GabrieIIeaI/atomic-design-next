import { InputHTMLAttributes } from 'react'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}