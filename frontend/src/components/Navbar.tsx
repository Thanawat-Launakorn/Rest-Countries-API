import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [theme, setTheme] = useState(true as boolean)
    const rootElement = document.documentElement
    const switchTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }
    useEffect(() => {
        switch (theme) {
            case false:
                rootElement.classList.remove('dark')
                rootElement.style.backgroundColor = 'hsl(0, 0%, 98%)'
                break;
            case true:
                rootElement.classList.add('dark')
                rootElement.style.backgroundColor = 'hsl(207, 26%, 17%)'
                break;
            default:
                throw new Error('theme not working!')
        }
    }, [switchTheme])




    return (
        <nav className='w-sceen bg-white1 text-verydarkblue2 dark:bg-darkblue dark:text-white border-gray-200 shadow-md'>
            <div className='container flex flex-wrap items-center justify-between mx-auto py-5 px-16'>
                <div>
                    <span className='font-bold text-xl tracking-wide'>Where in the world?</span>
                </div>
                <button type='button' className='text-sm' onClick={switchTheme}>
                    <i className="fas fa-moon mr-3"></i><span className='font-normal'>Dark Mode</span>
                </button>
            </div>

        </nav>
    )
}
