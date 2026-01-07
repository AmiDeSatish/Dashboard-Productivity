import style from "./TaskList.module.css"
import inProgressEmoji from "../../../../assets/appleEmoji/inProgress.png"
import snoozeEmoji from "../../../../assets/appleEmoji/snooze.png"
import doneEmoji from "../../../../assets/appleEmoji/done.png"
import lowPrio from "../../../../assets/appleEmoji/low.png"
import mediumPrio from "../../../../assets/appleEmoji/medium.png"
import highPrio from "../../../../assets/appleEmoji/high.png"
import editEmoji from "../../../../assets/appleEmoji/edit.png"
import deleteEmoji from "../../../../assets/appleEmoji/delete.png"

import type {Task, Progress, Priority} from "../../../../types/shared.ts"
import type {Filter} from "../../../../types/tasks.ts"
import {useContext, useEffect} from "react"
import { UpString, ddMMyy,NextProgressState, NextPriorityState} from "../../../../utils.ts"
import { EditTaskContext } from "../TaskSection.tsx"

type TaskListProps = {
  tasks : Task[],
  filter : Filter,
  handleEditTask : (id : number, patch : Partial<Task>) => void,
  handleProgressTask : (id : number) => void,
  handlePriorityTask : (id : number) => void,
  handleDeleteTask : (id : number) => void
}

function TaskList({tasks,filter,handleEditTask,handlePriorityTask,handleProgressTask,handleDeleteTask} : TaskListProps){
  /**Use the context of TaskSection to open  */
  const ctx = useContext(EditTaskContext)

  const progressEmojiMap : Record<Progress,string> = {
    pending : snoozeEmoji,
    inProgress : inProgressEmoji,
    done : doneEmoji
  }

  const priorityEmojiMap : Record<Priority,string> = {
    low : lowPrio,
    medium : mediumPrio,
    high : highPrio,
  }

  useEffect(() => {
    console.log(tasks)
  },[tasks])

  return(
    <>
      <div className={style.taskListWrapper}>
        <div className={style.taskGrid}>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" viewBox="0 0 24 24"  stroke="currentColor">
              <path  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
            </svg>
            <span>Task Id</span>
          </div>
          <div className={`${style.caseHeader} ${style.caseHeaderName}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
            </svg>
            <span>
              Task Name
            </span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
            <span>Category</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>Due</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            <span>Progress</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <span>Priority</span>
          </div>
          <div className={style.caseHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
            <span>Actions</span>
          </div>
        </div>
        {tasks.map(task => {
          return(
            <div key={task.id} className={`${style.taskGrid} ${style.gridRow}`}>
              <div className={style.caseItem}>
                <span>{task.id}</span>
              </div>
              <div className={style.caseItem}>
                <span>{UpString(task.name)}</span>
              </div>
              <div className={style.caseItem}>
                <span>{task.categoryId}</span>
              </div>
              <div className={style.caseItem}>
                <span>{ddMMyy(task.due)}</span>
              </div>
              <div className={`${style.caseItem} ${style.buttonCell}`}>
                <button className={style.caseButton} onClick={() => handleProgressTask(task.id)}>
                  <img src= {progressEmojiMap[task.progress]}/>
                </button>
              </div>
              <div className={`${style.caseItem} ${style.buttonCell}`}>
                <button className={style.caseButton} onClick={() => handlePriorityTask(task.id)}>
                  <img src={priorityEmojiMap[task.priority]}/>
                </button>
              </div>
              <div className={`${style.caseItem} ${style.doubleButtonCell}`}>
                <button onClick={() => ctx.openEditModal(task)} className={style.caseButton}>
                  <img src={editEmoji}/>
                </button>
                <button onClick={() => handleDeleteTask(task.id)} className={style.caseButton}>
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

export default TaskList