import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      
    <div className="menu">
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/projects'>Projects</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/contact'>Contact</Link></li>
        <div className='picture-container'>
       
      </div>
      
    </div>
    <div className="menu-long">
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/projects'>Projects</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/contact'>Contact</Link></li>
      
    </div>
   
    <div className='picture-container'>
        <img src='https://avatars.githubusercontent.com/u/48423441?v=4' alt='#'/>
      </div>
    </div>
  );
}

export default Header;
