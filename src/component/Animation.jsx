import React from 'react';
import './animation.css'
import Navigation from './Navigation';

function Animation() {
  return (
    <section id='top'>
    <div className="animationPage min-h-screen text-4xl md:text-5xl p-8 md:flex justify-around felx-wrap ">
      <div className='h-3/4 w-full md:w-1/2' >
        <h1 className='text-3xl md:text-5xl font-bold pt-0'>
          <div className='hidden md:block'>Hello 👋 , I'm </div>
          Hemant Mangukiya</h1>
        
        <div className='p-2'>     
        <Navigation/> 
        </div>
       </div>

       <div  className='md:w-1/2 '>
    <section className="animation pt-36 text-center md:text-start md:pt-0">
        <div className="first"><div>Software Engineer</div></div>
        <br/>
        <div className="second"><div>Full Stack Developer</div></div>
        <br/>
        <div className="third"><div>ML Developer</div></div>
    </section>
    </div>
  </div>
  </section>
  );
}

export default Animation;
