import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Hemant Mangukiya</h1>
        
        <Navigation/>

      </div>
    </header>
  );
}

export default Header;
