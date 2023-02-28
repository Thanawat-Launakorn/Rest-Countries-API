import React from 'react'
import DataCountries from '../models/dataCountries'

export default function Card(props: DataCountries) {
    return (
        <div className='shadow-xl rounded-md overflow-hidden bg:white1 dark:bg-darkblue'>
            <img src={props.flag} alt="flag-contries" className='object-cover h-36 w-full' />
            <div className='pt-5 pb-10 px-5'>
                <h1 className='mb-2 font-bold text-md tracking-wide text-verydarkblue2 dark:text-white1'>{props.name}</h1>
                <ul className='text-sm'>
                    <li className='text-verydarkblue2 dark:text-white1 mb-1 font-semibold'>Population: <span className='dark:text-gray-400 font-thin'>{props.population}</span></li>
                    <li className='text-verydarkblue2 dark:text-white1 mb-1 font-semibold'>Region: <span className='dark:text-gray-400 font-thin'>{props.region}</span></li>
                    <li className='text-verydarkblue2 dark:text-white1 mb-1 font-semibold'>Capital: <span className='dark:text-gray-400 font-thin'>{props.capital}</span></li>
                </ul>
            </div>
        </div>
    )
}
