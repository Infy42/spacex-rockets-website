import React, {useState} from 'react'
import './hero.css'

export const Hero = () => {

    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => {
      alert(`${inputValue} subscribed!`);
    };

  return (
    <>
      <div id='hero' className="relative m-0 p-0 pl-12 h-auto w-auto">
        <h1 id='hero-text' className='absolute top-8 left-8 m-8 p-8 text-4xl font-black text-white'>EXPLORE ROCKET TYPES</h1>
        <a href='/' id="hero-button" className="absolute flex top-10 p-2 left-12 text-2xl font-bold text-white">Click here</a>

        <p id='hero-desc' className='relative flex'>
          SpaceX, founded by Elon Musk in 2002, has become a pioneering force in the aerospace industry. Their innovative rockets,
          such as the Falcon 9 and Falcon Heavy, have redefined space travel by introducing reusability, drastically reducing 
          launch costs. With numerous successful missions to the International Space Station and plans for ambitious projects 
          like the Starship, SpaceX continues to push the boundaries of space exploration and inspire the world with their 
          groundbreaking achievements.
        </p>
     </div>
     <h3 id='newsletter-text' className='absolute text-lg flex left-12 ml-8 font-bold text-white'>Subscribe to our newsletter:</h3>
     <div className="flex">
      <input
        type="text"
        id='newsletter-email'
        className="flex relative rounded-l mt-10 ml-8 pl-12 left-12 z-10 bg-gray-200 appearance-none border-1 border-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple-500"
        placeholder="Enter your email"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        id='newsletter-button'
        className="flex relative bg-blue-500 text-white rounded-r p-2 left-10 mt-10 z-10"
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>

    </>
  )
  }

