import './Experience.css'
import React, { useState } from 'react';

const experienceData = [
    {
      id: 1,
      name: 'CodSoft',
      role:'Front-End Developer Intern',
      durationFrom:'June 2023',
      durationTo:'July 2023',
      desc1: 'Revolutionize online shopping with our cutting-edge e-commerce platform.',
      desc2:'Shopper name is given',

    },
    {
      id: 2,
      name: 'OctaNet',
      role:'Front-End Developer Intern',
      durationFrom:'July 2023',
      durationTo:'Aug 2023',
      desc1: 'Revolutionize online shopping with our cutting-edge e-commerce platform.',
      desc2:'Shopper name is given',
    },
    {
      id: 3,
      name: 'TechiEco',
      role:'Front-End Developer Intern',
      durationFrom:'Oct 2023',
      durationTo:'Jan 2023',
      desc1: 'Revolutionize online shopping with our cutting-edge e-commerce platform.',
      desc2:'Shopper name is given',
    },
    
  ];
  
  const Experience = () => {
    const [startIndex, setStartIndex] = useState(0);
  
    const nextExperiences = () => {
      setStartIndex((prev) => Math.min(prev + 1, experienceData.length - 1));
    };
  
    const prevExperiences = () => {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    };
  
    return (
        <div id='main-exp'>
      
            <h2 className='exp-title'>My Experiences</h2>
    {/* <span className='proDesc'><p>Explore my portfolio showcasing diverse projects, demonstrating my 
proficiency in building innovative and impactful web solutions.<br/> </p></span> */}
 
      <div className="exps-container">
        <div className="slider left" onClick={prevExperiences}>
          &lt;
        </div>
        <div className="exp-list">
          {experienceData.slice(startIndex, startIndex + 1).map((experience) => (
            <div key={experience.id} className="exp">


            <div className='name-role'>
              <h3 className='comp-name'>{experience.name} </h3>

              {/* new className role added */}
              <h4 className='role'><span className='separator'> | </span>{experience.role}</h4>
              </div>


              {/* new className durations added */}
              <div className='durations'>
              <p className='duration-from'>{experience.durationFrom}</p>
              <h4 className='separator'> To </h4>
              <p className='duration-to'> {experience.durationTo}</p>
              </div>
            
              {/* new className added: descriptions and right-arrow */}
              <div className='descriptions'>
              <p><i class="fa-thin fa-caret-right right-arrow"></i>{experience.desc1}</p>
              <p><i class="fa-thin fa-caret-right"></i>{experience.desc2}</p>
              </div>

              </div>
           
            ))}
        </div>
        <div className="slider right" onClick={nextExperiences}>
          &gt;
        </div>
      </div>
      {/* <button className='seemore-btn'>See More</button> */}
      </div>
    );
  };
  
  export default Experience;