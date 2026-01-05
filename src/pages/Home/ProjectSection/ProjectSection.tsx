import {useState,useContext, createContext} from "react"

import style from "./ProjectSection.module.css"
import ProjectHeader from "./header/ProjectHeader.tsx"
import ProjectSubHeader from "./subheader/ProjectSubHeader.tsx"
import ProjectList from "./ProjectList/ProjectList.tsx"

import type { Project } from "../../../types/shared.ts"

type ProjetSectionProps = {
  projects : Project[]
}

function ProjetSection({projects} : ProjetSectionProps){
  const [isWatching, setIsWatching] = useState<boolean>(false)
  const [filterProject, setFilterProject] = useState<string>("")

  function openProjectList(){
    setIsWatching(!isWatching)
    console.log("arrow project clicked")
  }

  function handleFilter(info : string) : void{
    setFilterProject(info)
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

        {isWatching && <ProjectList
                        projects = {projects}
                        />

        }
      </div>
    </>
  )
}

export default ProjetSection