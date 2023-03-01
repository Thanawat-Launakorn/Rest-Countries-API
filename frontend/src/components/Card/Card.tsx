import React, { useContext } from 'react'
import DataCountries from '../../models/ICountries'
type CardProps = {
    data: DataCountries
}
export default function Card(props: CardProps) {
    const { name, flag, population, region, capital, flags } = props.data

    return (
        <div>
            <div className='shadow-xl rounded-md overflow-hidden bg-light-element dark:bg-dark-element transition-all ease-linear delay-200 hover:brightness-75 dark:hover:brightness-125 hover:delay-75 hover:cursor-pointer'>
                <img src={flags.svg} alt={flags.alt} className='object-cover h-36 w-full' />
                <div className='pt-5 pb-10 px-5 '>
                    <h1 className='mb-2 font-bold text-md tracking-wide text-light-text dark:text-dark-text transition-all ease-linear delay-200'>{name.common}</h1>
                    <ul className='text-sm '>
                        <li className='text-light-text dark:text-dark-text mb-1 font-semibold transition-all ease-linear delay-200'>Population: <span className='dark:text-gray-400 font-thin transition-all ease-linear delay-200'>{population}</span></li>
                        <li className='text-light-text dark:text-dark-text mb-1 font-semibold transition-all ease-linear delay-200'>Region: <span className='dark:text-gray-400 font-thin transition-all ease-linear delay-200'>{region}</span></li>
                        <li className='text-light-text dark:text-dark-text mb-1 font-semibold transition-all ease-linear delay-200'>Capital: <span className='dark:text-gray-400 font-thin transition-all ease-linear delay-200'>{capital}</span></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
