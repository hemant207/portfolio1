import React from 'react';
import Project from './Project';
import './project.css'

const projects = [
  {
    title: 'British Airways Virtual experience',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_YGqGb4o6GEcWv56XN_1678032082852_completion_certificate.pdf',
    description: `Web Scraping: Developed expertise in using web scraping techniques to extract customer review data from online sources. Data Analysis: Acquired skills in cleaning, manipulating, and analyzing large volumes of customer review data to uncover insights and patterns. Data Visualization: Utilized data visualization techniques to effectively present findings and insights from the customer review analysis. Python: Enhanced proficiency in using Python programming language, including libraries such as Pandas, Numpy, and Matplotlib for data manipulation and visualization. Customer Sentiment Analysis: Gained insights into understanding and analyzing customer sentiment based on textual data from customer reviews. Problem-solving: Developed critical thinking and problem-solving skills by identifying common issues and areas for improvement based on customer reviews.`,
    skills:["Web Scraping", "Data Manipulation", "Microsoft PowerPoint"," Data Visualization ","Natural Language Processing (NLP) "," Sentiment Analysis "," Data Science "," Data Analysis","Analytical Skills"]
  },
  {
    title: 'J.P Morgan Virtual experience',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_YGqGb4o6GEcWv56XN_1685726686161_completion_certificate.pdf',
    description: `Implementing Perspective: Acquired proficiency in utilizing the Perspective open-source code to enable efficient data visualization and analysis. React and TypeScript: Developed expertise in using React and TypeScript to build web applications for data visualization and interaction. Web Application Development: Gained hands-on experience in developing web applications with a focus on financial data analysis and visualization. Technical Communication: Developed effective communication skills to present financial analysis data visually and interactively to traders and stakeholders. Financial Analysis: Gained insights into financial analysis methodologies and techniques, enabling better decision-making and understanding of market trends. Git: Acquired knowledge and experience in using Git for version control, collaboration, and project management in a professional software development environment.`,
    skills:["Git BASH","TypeScript","React.js"," Git","Python (Programming Language)"]
  },
  // Add more projects here as needed
];

const projects2 = [
  {
    title: `Emailer - An Brodcast Email app`,
    g_link:"https://github.com/hemant207/emailSender",
    link: 'https://emailsender-ypdx.onrender.com',
    description: `Key Features Email 
    Automation: 
    The application streamlines email communication processes. 
    
    Secure Email: Emails are transmitted securely with SSL/TLS encryption. 
    
    Environment Variable Management: Sensitive data, such as email credentials, is securely stored using environment variables.
    
     Client-Side Web Interface: A visually appealing web interface enhances user interaction and data presentation. 
    
    Asynchronous Data Handling: Efficient handling of data for improved performance.`,
    skills:["Express.js","Back-End Web Development" ,"Node.js ","JavaScript" ,"Git","HTML","Cascading Style Sheets (CSS)"]
  },
  {
    title: `
    EventBreaker - An Event booking App`,
    g_link:"https://github.com/hemant207/eventBreaker",
    link: 'https://eventbreaker.vercel.app/',
    description: `This is a web application for event booking and management, allowing users to explore and book various events. Additionally, it provides an admin portal for event management and user administration.

    Technologies Used
    React for building the frontend UI.
    React Router for client-side routing.
    Material-UI for user interface components.
    Recoil for state management.
    Axios for making API requests.
    Stripe for payment processing.
    `,
    skills:["recoil","JSON Web Token (JWT)","meterial ui","telwind-css","Express.js","API Development","Back-End Web Development","MongoDB","React.js","Node.js"]
  },
  // Add more projects here as needed
];

const workStyles = {
    padding: '16px',
    backgroundColor:'linear-gradient(180deg,  rgb(187, 241, 101) 0%, rgb(15, 160, 232) 35%, rgb(64, 198, 225) 100%)'
  };
  
  const sectionTitleStyles = {
    margin: '16px 0',
  };

 function Work() {
  return (
    <div className='works'>
    <section id="work" >
      <h1 className="text-5xl font-bold text-center" style={sectionTitleStyles}>Certifications</h1>
      {projects.map((project, index) => (
        <center>
        <Project
          key={index}
          title={project.title}
          link={project.link}
          description={project.description}
          skills={project.skills}
        /><br/>
        </center>
      ))}
      <div className="projects">
      <h1 className="text-5xl font-bold text-center" style={sectionTitleStyles}>Project Work So Far</h1>
      <br/>
      
        {/* Add your project work content here */}
        {projects2.map((project, index) => (
        <center>
        <Project
          key={index}
          title={project.title}
          link={project.link}
          description={project.description}
          skills={project.skills}
          g_link={project.g_link}
        />
        <br/>
        </center>
      ))}
      </div>
    </section>
    </div>
  );
}

export default Work;

