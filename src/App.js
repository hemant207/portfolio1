import React from 'react';
import './App.css';
import Animation from './component/Animation';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
  
      <Animation />
      <About />
      <Work />
      <Contact />
      {/* Footer component can be added here */}
    </div>
  );
}

export default App;
