import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white px-8 shadow-md fixed w-full'>
      <div className='flex justify-between items-center w-full py-5'>

        <div className='flex items-center'>
          <a href='#home'>
            <h1 className='text-black font-bold md:text-xl text-md'>Prodmast</h1>
          </a>
        </div>


        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-black focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>


        <div className='hidden md:flex items-center'>
          <ul className='flex justify-between gap-4'>
            <a href='#home'>
              <li className='text-black font-bold md:text-md text-sm'>Home</li>
            </a>
            <a href='#about'>
              <li className='text-black font-bold md:text-md text-sm'>About</li>
            </a>
            <a href='#services'>
              <li className='text-black font-bold md:text-md text-sm'>Services</li>
            </a>
            <a href='#contacts'>
              <li className='text-black font-bold md:text-md text-sm'>Contacts</li>
            </a>
          </ul>
        </div>


        <div className='hidden md:flex items-center'>
          <button className='bg-green-950 text-white font-bold md:text-md text-sm px-4 py-3 rounded-md'>Get Started</button>
        </div>
      </div>

      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className='md:hidden t'>
          <ul className='flex flex-col gap-4'>
            <a href='#home'>
              <li className='text-black font-bold md:text-md text-sm'>Home</li>
            </a>
            <a href='#about'>
              <li className='text-black font-bold md:text-md text-sm'>About</li>
            </a>
            <a href='#services'>
              <li className='text-black font-bold md:text-md text-sm'>Services</li>
            </a>
            <a href='#contacts'>
              <li className='text-black font-bold md:text-md text-sm'>Contacts</li>
            </a>
            <button className='bg-green-950 text-white font-bold md:text-md text-sm px-4 py-3 rounded-md my-4'>
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
