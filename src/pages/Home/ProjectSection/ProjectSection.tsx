import {useState,useContext, createContext} from "react"

import style from "./ProjectSection.module.css"
import ProjectHeader from "./header/ProjectHeader.tsx"
import ProjectSubHeader from "./subheader/ProjectSubHeader.tsx"
import ProjectList from "./ProjectList/ProjectList.tsx"

import type { Task,Project } from "../../../types/shared.ts"

type ProjetSectionProps = {
  tasks : Task[]
  projects : Project[]
}

type EditContextType = {
  selectedProject : Project | null,
  closeEditModal : () => void,
  editProject : () => void
}

export const EditContext = createContext<EditContextType|null>(null)

function ProjetSection({tasks,projects} : ProjetSectionProps){
  /**Statefull Variable */
  const [stateProjects, setProjects] = useState<Project[]>(projects)
  const [selectedProject,setSelectedProject] = useState<Project | null>(null)
  const [editModal, setEditModal] = useState<boolean>(false)
  const [isWatching, setIsWatching] = useState<boolean>(false)
  const [filterProject, setFilterProject] = useState<string>("")

  function openProjectList(){
    setIsWatching(!isWatching)
    console.log("arrow project clicked")
  }

  function handleFilter(info : string) : void{
    setFilterProject(info)
  }

  function deleteProject(selectedId : number) : void{
    console.log("Bouton delete Project clicked")
    setProjects(p => p.filter(project => project.id !== selectedId))
  }

  function closeEditModal(){
    setEditModal(false)
  }

  function openEditModal(){
    setEditModal(true)
  }

  function editProject(){
    return true
  }

  return(
    <>
      <div className={style.projectWrapper}>
        <ProjectHeader 
          isWatching = {isWatching}
          openProjectList = {openProjectList}
        />
        {isWatching && <ProjectSubHeader
                          filter = {filterProject}
                          handleFilter = {handleFilter}
                        />
        }

        {isWatching &&  <EditContext.Provider value = {{
                          selectedProject,
                          closeEditModal,
                          editProject
                        }}>
                          <ProjectList
                          deleteProject={deleteProject}
                          openEditProModal={openEditModal}
                          tasks = {tasks}
                          projects = {stateProjects}
                          />
                        </EditContext.Provider> 
        }
      </div>
    </>
  )
}

export default ProjetSection