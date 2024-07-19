import { useState } from "react";
import NewProjects from "./components/NewProjects";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";



function App() {

   const [projectState,setProjectState]=useState({
    projectStateId:undefined,
    projects:[],
    tasks:[],
   })

   function handleTaskChange(text){
      setProjectState((prevState)=>{
         const taskValue={
            text:text,
            id:Math.random(),
         } 
         return {
               ...prevState,
               tasks : [...prevState.tasks,
                  taskValue
               ]
         };
      }
      ); 

   }

   function handleInputClick(){
    setProjectState((prevState)=>{
        return {
            ...prevState,
              projectStateId:null

        }

   });
}

   function handleSaveClick(projectData){
      
      setProjectState((prevState)=>{
         const projectValue={
            ...projectData,
            id:Math.random(),
         }
         return {
            ...prevState,
               projectStateId:undefined,
               projects : [...prevState.projects,
                  projectValue
               ]

               
         };
      }
      ); 
      console.log(projectState.projects)
      

   }


   function handleCancelClick(){
      setProjectState((prevState)=>{
         return {
            ...prevState,
               projectStateId:undefined,
         }
      })
   }


   function handleSelectedProject(id){
      setProjectState((prevState)=>{
         return {
            ...prevState,
               projectStateId:id,
         }
      })
   }

   function handleDeleteTask(id){
      setProjectState((prevState)=>{
         return {
            ...prevState,
               tasks:prevState.tasks.filter(task => task.id !== id)
         }
      })
   }

   function handleDeleteProject(){
      setProjectState((prevState)=>{
         return {
            ...prevState,
               projectStateId:undefined,
               projects:prevState.projects.filter(project => project.id !== projectState.projectStateId)
         }
      })
   }

   const SelectedProjects=projectState.projects.find((project)=>project.id === projectState.projectStateId)

   let content=<SelectedProject projects={SelectedProjects} onDelete={handleDeleteProject} onAdd={handleTaskChange} tasks={projectState.tasks}
   onDeleteTask={handleDeleteTask}
   />;

   if (projectState.projectStateId === undefined){
      content = <NoProject  handleInputClick={handleInputClick} />
   }
   else if( projectState.projectStateId === null){
      content = <NewProjects onAdd={handleSaveClick} onCancel={handleCancelClick}/>
   }
   return (

    <main className="h-screen my-8 flex gap-8">
       <Sidebar handleInputClick={handleInputClick} projects={projectState.projects}  handleSelectedProject={handleSelectedProject}
       selectedProjectId={projectState.projectStateId}
       />
      {content}
    </main>
  );
}

export default App;
