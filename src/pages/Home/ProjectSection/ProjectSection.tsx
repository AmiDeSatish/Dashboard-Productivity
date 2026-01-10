import {useState} from "react"

import style from "./ProjectSection.module.css"
import ProjectHeader from "./header/ProjectHeader.tsx"
import ProjectSubHeader from "./subheader/ProjectSubHeader.tsx"
import ProjectList from "./ProjectList/ProjectList.tsx"

import type { Task,Project } from "../../../types/shared.ts"

type ProjetSectionProps = {
  tasks : Task[]
  projects : Project[]
  handleDeleteProjects : (id : number) => void
}

function ProjetSection({tasks,projects,handleDeleteProjects} : ProjetSectionProps){
  /**Statefull Variable */
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

        {isWatching &&  <ProjectList
                          handleDeleteProjects={handleDeleteProjects}
                          openEditProModal={openEditModal}
                          tasks = {tasks}
                          projects = {projects}
                        />
        }
      </div>
    </>
  )
}

export default ProjetSection