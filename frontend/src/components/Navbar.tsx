import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext)
    const isDark = theme === 'dark'

    return (
        <nav className='w-sceen bg-light-element text-light-text dark:bg-dark-element dark:text-dark-text border-gray-200 shadow-md'>
            <div className='container flex flex-wrap items-center justify-between mx-auto py-5 px-16'>
                <div>
                    <span className='font-bold text-xl tracking-wide'>Where in the world?</span>
                </div>
                <button type='button' className='text-sm' onClick={() => {
                    setTheme && setTheme(isDark ? 'light' : 'dark')
                }}>
                    <i className="fas fa-moon mr-3"></i><span className='font-normal'>Dark Mode</span>
                </button>
            </div>

        </nav>
    )
}
