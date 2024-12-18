import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import "./NavBar.css";
import menu_icon from '../assets/menu-icon.png'
import logo from '../assets/logo.png';

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 790);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up event listener
  }, []);

  const [Menu,setMenu]=useState(false);
  const toggleMenu=()=>{
    Menu ? setMenu(false) : setMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'Nav-bar' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={Menu?'':'hide_menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Campus</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default NavBar;
