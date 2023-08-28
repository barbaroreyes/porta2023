import React ,{useState}from 'react';
import {Link} from 'react-router-dom';
// sds
const Header = () => {
  //este 
  const [menuContainer , setMenuContainer] = useState('menu');
  const [menuClass , setMenuClass] = useState('hamburger_icon');
 const  [isMenuClicked,setMenuClicked] = useState(false);
  const clicedcompo = () => {
  if(!isMenuClicked){
    
    setMenuContainer('menu1')
    setMenuClass('hamburger_icon1')
  }
   else{
    setMenuContainer('menu')
    setMenuClass('hamburger_icon')
   }
   setMenuClicked(!isMenuClicked)
  }
 
  return (
    <div className="header-container" >
      
    <div className={menuContainer } onClick={clicedcompo} >
      
        <div className= {menuClass} >
          <div></div>
          <div></div>
          <div></div>

        </div>
        <div >
       <div>
        
       </div>
      
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
