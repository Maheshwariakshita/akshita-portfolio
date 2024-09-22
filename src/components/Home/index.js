import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoK from '../../assets/images/logo-me.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
   const nameArray = ['A', 'k', 's', 'h', 'i', 't', 'a']
  const jobArray = [
    'T',
    'e',
    'c',
    'h',
    ' ',
    'G',
    'e',
    'e',
    'k',
    '.'
  ]

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  return (
    <>
    <div className="container home-page">
    
        <div className="text-zone ">
          
            <h1>
            
         
            <span className={letterClass}>Warmest</span>
            <span>&nbsp;</span>
            <span className={`${letterClass} _12`}> regards,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <span>&nbsp;</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters><br/>
            <span className={`${letterClass} _22`}>a
              </span>    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23}></AnimatedLetters>
            </h1>
            <h2> Eternal Seeker of Knowledge/ Driven by Data /Keen On UI/UX</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          
          
        
            
        </div>
        
          
      </div>
      <Loader type='pacman'></Loader>
    </>
  )
}

export default Home