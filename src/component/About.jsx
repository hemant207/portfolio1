import React from 'react';
import './about.css'

function About() {
  return (
    <div className='about min-h-screen'>
    
      <div >
        <section id="about">
          <h1 className='text-6xl text-center font-bold pt-4'>Skills</h1>
          <ul className='skill_list flex justify-around flex-wrap text-xl p-8'>
              <li className='skill_list_li'><h1>Languages and Technology:</h1>
                <ul >
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                </ul>
              </li>

              <li className='skill_list_li'><h1>Frameworks and libraries:</h1>
                <ul>
                  <li>Node.js</li>
                  <li>Https server</li>
                  <li>Express.js</li>
                  <li>Css</li>
                  <li>React.js</li>
                </ul>
              </li>

              <li className='skill_list_li'><h1>Databases:</h1>
                <ul >
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>SQLite</li>
                </ul>
              </li>

              <li className='skill_list_li'><h1>Data analysis and Visualization:</h1>
                <ul >
                  <li>Excel</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                </ul>
              </li>

              <li className='skill_list_li'><h1>Version control:</h1>
                <ul>
                  <li>Git and GitHub</li>
                </ul>
              </li>
</ul>


        </section>
      </div>
    </div>
  );
}

export default About;
