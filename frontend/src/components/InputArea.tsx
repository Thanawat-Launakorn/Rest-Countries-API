import React from 'react'

export default function InputArea() {
    return (
        <form>
            <div className='container flex justify-between lg:px-16 mx-auto mt-12'>
                <div className='relative w-1/3'>
                    <input type="text" placeholder='Search for a country...' className='bg-light-element text-sm text-light-text dark:bg-dark-element dark:text-dark-text focus:outline-none focus:border-none focus:ring-0 border-none shadow-lg rounded-md pl-16 lg:py-3.5 lg:w-full' />
                    <i className="fa fa-search text-verydarkblue2 dark:text-white lg:absolute lg:left-6 lg:top-4" aria-hidden="true"></i>
                </div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-light-text text-sm dark:bg-dark-element dark:text-gray-300 flex justify-between align-middle py-3.5 px-4 w-1/6 rounded-md shadow-lg" type="button">
                    <span>Filter by Region</span> <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdown" className="z-10 hidden bg-light-element divide-y divide-gray-100 rounded-md shadow lg:w-48 dark:bg-dark-element">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    )
}
