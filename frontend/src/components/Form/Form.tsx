import React, { ChangeEventHandler } from 'react'
import InputField from '../InputField/InputField'
import SelectField from '../SelectField/SelectField'

type FormProps = {
    onChangeSearchField: ChangeEventHandler<HTMLInputElement>
    onChangeSelectField: ChangeEventHandler<HTMLSelectElement>
    countryName?: string
    selectRegion?: string

}
export default function Form(props: FormProps) {
    return (
        <div className='container flex justify-between lg:px-16 mx-auto mt-12'>
            <InputField
                id='input-search-country'
                name='search-country'
                onChange={props.onChangeSearchField}
                type='text'
                key={null}
                placeholder='Search for a country...'
                prefix={<i className="fa fa-search text-verydarkblue2 dark:text-white lg:absolute lg:left-6 lg:top-4" aria-hidden="true"></i>}
                value={props.countryName}
            />
            <SelectField
                onChange={props.onChangeSelectField}
                className=''
                id=''
                key={null}
                label=''
                name=''
                options={[]}
                value={props.selectRegion} />
        </div>
    )
}
