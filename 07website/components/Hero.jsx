import React from 'react'
import  "./Hero.css";
import dark_arrow from '../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>NIG</h1>
        <p>Niggas cant always be black just because they are niggas from paris</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero