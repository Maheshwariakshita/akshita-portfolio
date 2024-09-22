import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import TagCloud from 'TagCloud';

const Education = () => {

  const title = ["Python", "Java", "MySQL", "Numpy", "Matplotlib", "JSON", "REST API", "DS Algorithms", "Matlab", "ReactJS"];

  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // sphere animation
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML5", "CSS", "SASS", "JavaScript", "React", "MySQL", "JAVA", "NodeJS", 
      "Chess", "MATLAB", "Data Structures", "GIT", "GITHUB", "Algorithms", "OOPs"
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l', ' ', 'D', 'e', 'x', 't', 'e', 'r', 'i', 't', 'y']}
              idx={15}
            />
          </h1>
          
          {/* Skill badges */}
          <div className="skill-badge-container">
            {title.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>
        
       
      </div>

      <Loader type='pacman'/>
    </>
  );
};

export default Education;
