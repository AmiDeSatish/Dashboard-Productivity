import {useState} from "react"
import style from "./SideBarProjectSection.module.css"
import plusIcon from "./plusIcon.png"

type Project = {
  id : number,
  name : string,
  logo : string
}

type ProjectsSectionProps = {
  projects? : Project[]
}

function SideBarProjectSection({projects = []} : ProjectsSectionProps){

  const [showProjects,setShowProjects] = useState<boolean>(false)

  function handleShowProjects(){
    setShowProjects(e => !e)
  }

  return(
    <>
      <div className={style.ProjectSectionContainer}>
        <div className={style.firstRow}>
          <span>Projects</span>
          <button onClick={handleShowProjects} className={style.buttonPlusProject}>
            <img className={style.plusIcon} src={plusIcon}/>
          </button>
        </div>
        <ul className={style.projectList}>
          {showProjects && projects.map(project => {
            return(
              <li key={project.id}>
                <button className={style.projectButton}>
                  <img src={project.logo}/>
                  <span>{project.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default SideBarProjectSection