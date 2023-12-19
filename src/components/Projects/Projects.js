
import './Projects.css'
import React, { useState } from 'react';
import img1 from '../../proImages/e-commerce.png';
import img2 from '../../proImages/food.jpg';
import img3 from '../../proImages/crypto.png'
import img4 from '../../proImages/port.jpg'
import img5 from '../../proImages/todo.png'
import img6 from '../../proImages/weather.png'
import img7 from '../../proImages/pass.jpg'
import img8 from '../../proImages/counter.jpg'
const projectsData = [
    {
      id: 1,
      name: 'E-Commerce',
      image: img1,
      description: 'Revolutionize online shopping with our cutting-edge e-commerce platform.',
      skills:'React , JS ',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',

    },
    {
      id: 2,
      name: 'Food Delivery',
      image: img2,
      description: 'Savor the flavor! Explore a delightful world of culinary experiences.',
      skills:'React , Nodejs ',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    {
      id: 3,
      name: 'Crypto Tracker',
      image: img3,
      description: 'Dive into the future of finance with our innovative cryptocurrency solutions.',
      skills:'React , JS',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    {
      id: 4,
      name: 'Port-folio',
      image: img4,
      description: 'Crafting digital identities: Showcase your uniqueness with our portfolio designs.',
      skills:'React , JS ',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    {
      id: 5,
      name: 'ToDo List',
      image: img5,
      description: 'Boost productivity and stay organized with our intuitive to-do list application.',
      skills:'HTML , CSS , JS',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    {
      id: 6,
      name: 'Weather Check',
      image: img6,
      description: 'Stay ahead of the forecast: Access real-time weather updates effortlessly.',
      skills:'React , JS',
      url:'https://github.com/Sourabhjaiswal12016/Weather_app_react',
      demo:'https://weather-app-react-tan-delta.vercel.app/',
    },
    {
      id: 7,
      name: 'Pass. Generator',
      image: img7,
      description: 'Secure your digital journey: Manage passwords with our robust password manager.',
      skills:'HTML , CSS , JS',
      url:'https://github.com/Sourabhjaiswal12016/OctaNet_password_generator',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    {
      id: 8,
      name: 'Counter',
      image: img8,
      description: 'Count every success: Enhance your projects with our dynamic counter applications.',
      skills:'HTML , CSS , JS',
      url:'https://github.com/Sourabhjaiswal12016/Ecommerce-App',
      demo:'https://e-commerce-app-tau-ten.vercel.app/',
    },
    
  ];
  
  const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
  
    const nextProjects = () => {
      setStartIndex((prev) => Math.min(prev + 2, projectsData.length - 2));
    };
  
    const prevProjects = () => {
      setStartIndex((prev) => Math.max(prev - 2, 0));
    };
  
    return (
        <div id='main-pro'>
      
            <h2 className='pro-title'>My Projects</h2>
    {/* <span className='proDesc'><p>Explore my portfolio showcasing diverse projects, demonstrating my proficiency in building innovative and impactful web solutions.<br/> </p></span> */}
 
      <div className="projects-container">
        <div className="slider left" onClick={prevProjects}>
          &lt;
        </div>
        <div className="project-list">
          {projectsData.slice(startIndex, startIndex + 2).map((project) => (
            <div key={project.id} className="project">
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name} style={{ width: '200px', height: '150px' }} />

              <p>{project.description}</p>
              <h4 className='skills-used'>Skills: {project.skills}</h4>
              <div className='links'>
              <h3><a href={project.url} className='code'><i class="fa-brands fa-github"></i>Code</a></h3>
              <div className='separate-line'></div>
              <h3><a href={project.demo} className='live'><i class="fa-solid fa-display"></i>Demo</a></h3>
              </div>
            </div>
          ))}
        </div>
        <div className="slider right" onClick={nextProjects}>
          &gt;
        </div>
      </div>
      <div className='SeeMoreButton'>
      <button className='seemore-button'>See More</button>
      </div>
      
      </div>
    );
  };
  
  export default Projects;