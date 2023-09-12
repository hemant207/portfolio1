import React from 'react';
import './project.css'

const projectStyles = {
    border: '4px solid #ccc',
    padding: '16px',
    margin: '16px 0',
    Width:'80%',
    minHeight:'400px'
  };

  const titleStyles = {
    fontSize: '1.5rem',
    marginBottom: '8px',
  };
  
  const linkStyles = {
    color: 'blue',
    textDecoration: 'none',
    marginRight: '16px',
  };

function Project({ title, link, description,skills ,g_link}) {


  return (
    <div className="project md:flex" style={projectStyles}>
      <div className='pr-4 w-full md:w-1/2'>
      <h2 className='font-bold text-xl md:text-2xl' >{title}</h2><br/>

      <div className='flex flex-around flex-wrap'>
      {skills.map(skill=>(
        <div className='skill_div text-sm border-2 border-black p-1 m-1'>
        <p>{skill}</p>
        </div>
      ))}
      </div>

      </div>
      <br/>


      <div className='w-full md:w-1/2'>
      <p className='text-lg text-justify'>{description}</p>

      <br/>
      <div>
       {g_link?<><a href={g_link} rel="noopener noreferrer" target='blank' style={linkStyles}>Github</a></>:<></>}
      <a href={link} rel="noopener noreferrer" target='blank' style={linkStyles}>Live</a>
      </div>
      </div>
    </div>
  );
}

export default Project;
