import React, { useRef } from 'react'
import back_icon from '../assets/back-icon.png'
import next_icon from '../assets/next-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'
import './Testimonial.css'


const Testimonial = () => {

  const slider =useRef();
  let tx = 0;

  const MoveForward = () => {
    if (tx > -100){
      tx -= 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
  }

  const MoveBackward = () => {
    if (tx < 0){
      tx+=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`
  }

  return (
    <div className='testimonial'>
      <img src={back_icon} className='back-btn' onClick={MoveBackward}/>
      <img src={next_icon} className='next-btn' onClick={MoveForward}/>
    <div className="slider" >
      <ul ref={slider}>
        <li>
          <div className="slide" >
            <div className="user-info">
              <img src={user_1} alt=''/>
              <div>
                <h3> Willian jackson </h3>
                <span> Edufify , USA </span>
              </div>
              <p>
                i scored the most goals in the world
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt=''/>
              <div>
                <h3>James Hardson</h3>
                <span> Edufify , USA </span>
              </div>
              <p>
                i scored the most goals in the world
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt=''/>
              <div>
                <h3>Willi Boy</h3>
                <span>Osmania,India</span>
              </div>
              <p>
                i scored the most goals in the world
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt=''/>
              <div>
                <h3>Micheal jackson</h3>
                <span>Havard,USA</span>
              </div>
              <p>
                i scored the most goals in the world
              </p>
            </div>
          </div>
        </li>
      </ul>

    </div>
       
    </div>
  )
}

export default Testimonial
