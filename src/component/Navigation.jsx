import React from 'react';
import './navigation.css'

function Navigation() {
  return (
    
    <nav className>
      <ul className="nav-menu bg-black text-white mt-4 sm:w-5/6">
      <div className='sm:flex text-xl sm:text-2xl'>
        <div className='sm:p-1 md:p-3'>
        <li><a href="#about">About</a></li>
        </div>
        <div className='sm:p-1 md:p-3'>
        <li ><a href="#work">Work</a></li>
        </div>
        <div className='sm:p-1 md:p-3'>
        <li ><a href="#contact">Contact</a></li>
        </div>
        </div>
      </ul>
    </nav>
    
  );
}

export default Navigation;
