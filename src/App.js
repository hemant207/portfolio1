import React from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Animation from './component/Animation';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      {//<Header />
}
      <Animation />
      <About />
      <Work />
      <Contact />
      {/* Footer component can be added here */}
    </div>
  );
}

export default App;
