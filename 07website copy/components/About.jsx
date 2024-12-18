import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

export const About = ({setPlaySet}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlaySet(true)}}/>
      </div>
      <div className="about-right">
      <h3>Roblux</h3>
      <h2>
      1. Top Roblox Game Developers
Top Developers & Games: Games like Adopt Me!, Brookhaven, and Bloxburg have generated millions of dollars annually. Some of the most successful games on Roblox can bring in $1 million to over $10 million per year.
Revenue Sources: These earnings come primarily from in-game purchases, premium passes, and subscriptions. For instance, popular games with millions of daily players offer unique, purchasable content that consistently generates significant revenue.
      </h2>

      </div>
    </div>
  )
}
