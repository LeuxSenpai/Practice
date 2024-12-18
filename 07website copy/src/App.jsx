import { useState } from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Program  from '../components/Program'
import { Title } from '../components/Title'
import { About } from '../components/About'
import Campus from '../components/Campus'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Videoplayer from '../components/Videoplayer'




function App() {
 
  const [playState,setPlaySet] = useState(false);

  return (
    <>
    <NavBar/>
    <Hero/>
    <Title Subtile={'BLack Niggas'} Title={'Pooototie'}/>
    <Program/>
    <About setPlaySet={setPlaySet}/>
    <Title Subtile={'Gallery'} Title={'Campus photos'}/>
    <Campus/>
    <Title Subtile={'Testimonial'} Title={'Students kids'}/>
    <Testimonial/>
    <Title Subtile={'Get in touch'} Title={'Contact Us'}/>
    <Contact/>
    <Footer/>
    <Videoplayer playState={playState} setPlaySet={setPlaySet}/>
    
    </>
  )
}

export default App
