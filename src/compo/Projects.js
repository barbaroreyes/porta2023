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
          <img src={item.image} alt ={item.name}/>
          </div>
         <div className='project-image-container-links'>
         
         </div>
        </div>
       )
      })}
    </div>
  );
}

export default Projects;
