import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Projects from './compo/Projects';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element ={<Projects/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
