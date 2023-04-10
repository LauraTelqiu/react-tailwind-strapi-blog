import React, { useState } from 'react';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle)


  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
      </div>


      <div className='flex items-center'>
        <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
      </div>


      <div className='flex items-center'>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platform</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>









  )
}

export default Navbar