import React, { ChangeEventHandler } from 'react'
import { EMPTY_FUNCTION } from '../../utils'
type FieldProps = {
  type: string,
  placeholder?: string
  onChange: ChangeEventHandler<HTMLInputElement>,
  value?: string,
  prefix?: React.ReactNode,
  name: string,
  id: string
}


export default function InputField(props: FieldProps) {
  const {
    type = '',
    placeholder = '',
    onChange = EMPTY_FUNCTION,
    id = '',
    name = '',
    prefix
  } = props

  return (
    <div className='relative w-1/3'>
      {prefix}
      <input {...{ type, placeholder, onChange, id, name }} className='bg-light-element text-sm text-light-text dark:bg-dark-element dark:text-dark-text focus:outline-none focus:border-none focus:ring-0 border-none shadow-lg rounded-md pl-16 lg:py-3.5 lg:w-full' />
      {/* <i className="fa fa-search text-verydarkblue2 dark:text-white lg:absolute lg:left-6 lg:top-4" aria-hidden="true"></i> */}
    </div>
  )
}
