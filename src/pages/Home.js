import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
     
   <div className='box_container'>
    <Link to ='/' className='box grow'>Developer</Link> 
    <Link to='/projects' className='box grow'>UX/UI Design</Link> 
    </div>
    </div>
  );
}

export default Home;
