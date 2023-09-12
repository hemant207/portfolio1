import React from 'react';
import './form.css'; // Import the CSS file
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form_data = useRef();

  const YOUR_SERVICE_ID = "service_pn7jyqq";
  const YOUR_PUBLIC_KEY = 'vPN87MulXQgSYbhh5';
  const YOUR_TEMPLATE_ID = 'template_g40nuen';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form_data.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setTimeout(()=>{
            const show_msg = document.getElementById("show_msg").style.display = 'block'
          },400)
          document.getElementById('contact_form').reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
    
    <div className='relative contect p-3'>
    <section id="contact" >
      <div>
        <h1 className='text-5xl md:text-8xl'>
          # never stop
        </h1>
        <br/>
        <div className='md:absolute hidden top-36 bg-green-400 text-black p-8 text-2xl w-2/6 rounded-full' id='show_msg'>
          <h5 className='absolute right-8'
          style={{'cursor':'pointer'}}
          onClick={
            ()=>{document.getElementById("show_msg").style.display = 'none'}
          }>X</h5>
          <h2>Form submitted successfully</h2>
        </div>
      </div>
  
      <div className='text-2xl md:absolute right-40'>
      <form ref={form_data} onSubmit={sendEmail} id='contact_form' target="blank" className='form' method="POST" >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" required /><br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br />
        <input type="submit" value="Send Message" />
      </form>
      </div>
    </section>
    </div></>

  );  
}

export default Contact;
