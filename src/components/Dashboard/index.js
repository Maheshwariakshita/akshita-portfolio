import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import TagCloud from 'TagCloud';

const Dashboard = () => {
    
    
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    //sphere animation
    useEffect(() => {
        return () => {
          const container = ".tagcloud";
          const texts = [
            "HTML5",
            "CSS",
            "SASS",
            "JavaScript",
            "React",
            "MySQL",
            "JAVA",
            "NodeJS",
            "Chess",
            "MATLAB",
            "Data Structures",
            "GIT",
            "GITHUB",
            "Algorithms",
            "OOPs"
          ];
    
          const options = {
            radius: 300,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);

      useEffect(() => {
        return () => {
          const container = ".tagcloud1";
          const texts = [
            "HTML5",
            "CSS",
            "SASS",
            "JavaScript",
            "React",
            "MySQL",
            "JAVA",
            "NodeJS",
            "Chess",
            "MATLAB",
            "Data Structures",
            "GIT",
            "GITHUB",
            "Algorithms",
            "OOPs"
          ];
    
          const options = {
            radius: 200,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);

    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l', ' ', 'D', 'e','x','t','e','r','i','t','y']}
              idx={15}
            />
                </h1>
                <p>
                I possess proficiency in languages such as Java, C, JavaScript, HTML, and CSS. 
                My toolkit includes developer tools like VScode and Git,
                 along with experience in frameworks like React.js, Tailwind CSS, and SCSS
                </p>
                <p align="LEFT">
                Additionally, I'm well-versed in MySQL databases and have a strong academic foundation in Data 
                Structures and Algorithms,
                 Object-Oriented Programming, VLSI Design (VHDL),
                  and the fundamentals of Artificial Intelligence. 
                </p>
                
                <p>
                My passions are deeply rooted in the realms of Web Development, Cloud Computing,
                 and the intricate exploration of Artificial Intelligence's
                  boundless capabilities across multifarious domains.
          </p>
            </div>
            <div className='skill-set'>
                <span className='tagcloud'></span>
            </div>
            <div className='opt-mobile'>
                <span className='tagcloud1'>

                </span>
            </div>
            </div>

            <Loader type='pacman'/>
        </>
    )
}

export default Dashboard;