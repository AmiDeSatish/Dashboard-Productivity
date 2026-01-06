import style from "./ProjectList.module.css"

import type { Task,Project } from "../../../../types/shared"
import { ddMMyy, DarkenColor, ProjectProgress, ProjectTasks } from "../../../../utils"

import editEmoji from "../../../../assets/appleEmoji/edit.png"
import deleteEmoji from "../../../../assets/appleEmoji/delete.png"

type ProjectListProps = {
  tasks : Task[]
  projects : Project[]
}

function ProjectList({tasks, projects} : ProjectListProps){
  return(
    <>
      <div className={style.ProjectListWrapper}>
        <div className={style.projectGrid}>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" viewBox="0 0 24 24"  stroke="currentColor">
              <path  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
            </svg>
            <span>Project Id</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            <span>Project Progress</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>Due</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
            <span>Actions</span>
          </div>
        </div>
        {projects.map(project => {
            return(
              <div key={project.id} 
                    className={`${style.projectGrid} ${style.projectRow}`} 
                    style={{
                      "--project-color" : project.color,
                      "--hover-color":  DarkenColor(project.color)
                    }as React.CSSProperties}
              >
                <div className={style.caseItem}>
                  <span>{project.id}</span>
                </div>
                <div className={style.caseItem}>
                  {`${ProjectProgress(ProjectTasks(project.id, tasks))}%`}
                </div>
                <div className={style.caseItem}>
                  <span>{ddMMyy(project.due)}</span>
                </div>
                <div className={`${style.caseItem} ${style.caseButton}`}>
                  <button className={style.actionButton}>
                    <img src={editEmoji}/>
                  </button>
                  <button className={style.actionButton}>
                    <img src={deleteEmoji}/>
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default ProjectList