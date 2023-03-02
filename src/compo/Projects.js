import {useContext} from 'react';
import {ProjectContext} from '../context/projects'

const Projects = () => {
    const projects = useContext(ProjectContext);
    console.log(projects)
   
  return (
    <div className='container-projects'>
      {projects.map((item ,i)=> {
       return (
        <div className='project-container'>
           <h3>{item.name}</h3> 
          <div className='project-image-container'>
          <img src={item.picture} alt ={item.name}/>
          </div>
         <div className='project-image-container-links'>
          <a href={item.live}>App</a>
          <a href={item.Gib}>Git</a>
         </div>
        </div>
       )
      })}
    </div>
  );
}

export default Projects;
