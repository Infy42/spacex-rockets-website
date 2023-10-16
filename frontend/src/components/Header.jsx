import React, { useState } from 'react'
import './header.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue)
    setSearchQuery(e.target.value)
    
  };

  const handleRedirect = () => {
    window.location.href = `/search/${inputValue}`;
  };
  

  return (
    <>
      <div id='nav' className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
        <div id='logo' className="flex lg:flex-1">
          <a href='/' className='-m-2.5 -ml-7 p-1.5 '>
            <img src={Logo} alt="SpaceX Unofficial Logo" className="h-12 w-auto" />
          </a>
          <input onChange={handleInputChange} value={inputValue} id='searchBtn' type="search" placeholder='Search' className='absolute mt-2 ml-12 p-0 bg-gray-200 appearance-none border-1 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple-500' />
          <button id='redirectBtn' onClick={handleRedirect} className='absolute flex p-0.5 px-3 m-2 ml-10 bg-blue-500 text-white rounded-r'>Search</button>
        </div>
        <div id="pages" className='group relative flex items-center gap-x-6 right-12 rounded-lg p-4 text-sm'>
          <Link id='links' className='absolute text-base mt-3 right-10 p-0 text-gray-300 hover:text-white ' to='/about'>About</Link>
          <Link id='links' className='absolute text-base mt-3 left-10 p-0 text-gray-300 hover:text-white' to='/contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

