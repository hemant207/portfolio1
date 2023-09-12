import React from 'react';
import './navigation.css'

function Navigation() {
  return (
    
    <nav className>
      <ul className="nav-menu bg-black text-white mt-4 w-5/6 md:w-3/6">
      <div className='flex text-xl sm:text-2xl'>
        <div className='p-3'>
        <li><a href="#about">About</a></li>
        </div>
        <div className='p-3'>
        <li ><a href="#work">Work</a></li>
        </div>
        <div className='p-3'>
        <li ><a href="#contact">Contact</a></li>
        </div>
        </div>
      </ul>
    </nav>
    
  );
}

export default Navigation;
