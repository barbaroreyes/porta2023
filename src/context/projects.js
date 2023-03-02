import {createContext , useState} from 'react';
import {data} from '../data/data'
const ProjectContext = createContext();

const ProjectProvider = ({children}) => {
 const [projects ,setProject] = useState(data);
  return ( 
   <ProjectContext.Provider value={projects}>
      {children}
   </ProjectContext.Provider>
   )

}

export{ProjectContext ,ProjectProvider}