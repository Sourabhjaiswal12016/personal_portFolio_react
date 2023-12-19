import React, { useRef } from 'react';
import './Contact.css'; 
import myImage from '../../assets/bgrnd.jpg'; 
import linkedIn from '../../assets/linkIt.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1qjeiqf', 'YOUR_TEMPLATE_ID', form.current, 'ldNZ8KFK-hPcAyzmEhCyf')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div id='cnt-tit'>
    <h2 className='contact-title'>Contact Me</h2>
    <div className='con-des'><p>Thank you for visiting my portfolio! If you have any questions or would<br/> like to get in touch, feel free to reach out to me by filling the form below.</p></div>
    <section className="portfolioSection">
      <div className="leftSection">
        <div className="profileImageContainer">
          <img src={myImage} alt="My Profile" className="profileImage" />
        </div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/sourabh-jaiswal-6200b5229/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" className="socialIcon" />
          </a>
          <a href="https://github.com/Sourabhjaiswal12016" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="socialIcon" />
          </a>
          <a href="https://www.instagram.com/sourabh_jaiswal120/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="socialIcon" />
          </a>
          <a href="link" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="socialIcon" />
          </a>
        </div>
      </div>
      <div className="rightSection">
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type='text' className='contactInput' placeholder='Your Name' name='your_name' />
          <input type="email" className="contactInput" placeholder="Your Email" name='your_email' />
          <input type="tel" className="contactInput" placeholder="Your Mobile Number" name='your_number' />
          <textarea name="message" rows="5" placeholder="Your Message" className="contactInput"></textarea>
          <button type="submit" value="Send" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
