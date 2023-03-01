import React, { ChangeEventHandler } from 'react'
import { EMPTY_FUNCTION } from '../../utils/index'
type SelectFieldProps = {
    id?: string
    className?: string
    name?: string
    label?: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    // register?: UseFormMethods['register']
    options?: Array<OptionProps>
    value?: string
}

type OptionProps = {
    value: string
    label: string
}


export default function SelectField(props: SelectFieldProps) {
    const {
        id = '',
        className = '',
        name = '',
        label = '',
        onChange = EMPTY_FUNCTION,
        // register = EMPTY_FUNCTION,
        options = [],
        value = ''
    } = props

    return (
        <>
         
        </>

    )
}
