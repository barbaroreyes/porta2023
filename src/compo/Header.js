import{useRef} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

const Header = () => {

    const navRef = useRef();
    const showNav= ()=>{
      navRef.current.classList.toggle('responsive_nav')
    }

  return (
    <header>
        <div className="image_container">
            <img src="https://avatars.githubusercontent.com/u/48423441?v=4" alt=''/>
            Barbaro Reyes
        </div>
        <nav ref={navRef}>
            <a href="/">Home</a>
            <a href="/projects">Portafolio</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
         <button className='nav-btn nav-close-btn' onClick={showNav}>
            <FaTimes/>
         </button>
        
        </nav>
        <button className='nav-btn' onClick={showNav}>
            <FaBars/>
         </button>
    </header>
  );
}

export default Header;