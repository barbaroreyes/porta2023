import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Projects from './compo/Projects';
import Header from './compo/Header';
import Home from './pages/Home';
import Footer from './compo/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
      <Route path="/projects" element ={<Projects/>}/>
    </Routes>
     <Footer/>
    </>
  );
}

export default App;
