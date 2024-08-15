'use client'

import React from 'react'

import { InputTextProps } from './types'

const TodoListInput = ({ value, ...InputTextProps }: InputTextProps) => 
  <input {...InputTextProps} value={value}/>

export default TodoListInput









