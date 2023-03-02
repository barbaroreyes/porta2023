import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProjectProvider} from './context/projects'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ProjectProvider>
    <Router>
    <App />
    </Router>
    </ProjectProvider>
    
  </React.StrictMode>
);


reportWebVitals();
